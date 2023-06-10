import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import Article, { ArticleMediaItem, ArticleSection } from '../types/Article';
import { URLS } from '../utils/Constants';
import { ParseError, brToNewLine, isAbsoluteUrl, normalizeUrl, stripTags } from '../utils/Parse';
import { ImageFormat } from '../types/Image';
import Album from '../types/Album';
import { EOL } from 'os';

interface ArticleParseOptions {
  imageBaseUrl: string;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
  includeRawData: boolean
}

export default class ArticleParser {

  static parseArticle(html: string, opts: ArticleParseOptions): Article {
    const $ = cheerioLoad(html);
    const ldJson = $('script[type="application/ld+json"]').html();
    if (!ldJson) {
      throw new ParseError('Failed to parse article: missing JSON data.', html);
    }
    let basic, players;
    try {
      basic = JSON.parse(ldJson);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse article: JSON error in basic info.', html, error);
    }
    try {
      players = JSON.parse(decode($('#p-daily-article').attr('data-player-infos')));
    }
    catch (error: any) {
      players = null;
    }

    const article: Article = {
      title: basic.headline,
      description: basic.description,
      url: basic['@id'],
      imageUrl: basic.image,
      date: basic.datePublished,
      category: {
        name: basic.articleSection
      },
      author: {
        name: basic.author.name,
        url: basic.author['@id']
      },
      mediaItems: [],
      sections: []
    };

    // Get genre
    const genreLink = $('.genre a');
    if (genreLink.length > 0) {
      article.genre = {
        name: genreLink.text(),
        url: genreLink.attr('href')
      };

      const genreReadMoreLink = $('.moreingenre a')?.attr('href');
      if (genreReadMoreLink) {
        article.genre.readMoreUrl = isAbsoluteUrl(genreReadMoreLink) ? genreReadMoreLink : normalizeUrl(genreReadMoreLink, URLS.DAILY);
      }
    }

    // Get category url
    const categoryLink = $('article-type a')?.attr('href');
    if (categoryLink) {
      article.category.url = isAbsoluteUrl(categoryLink) ? categoryLink : normalizeUrl(categoryLink, URLS.DAILY);
    }

    // Get media items (albums and tracks featured in article)
    if (Array.isArray(players)) {
      players.forEach((player) => {
        let mediaItemType: 'album' | 'track' | null;
        switch (player.parent_tralbum_type) {
          case 'a':
            mediaItemType = 'album';
            break;
          case 't':
            mediaItemType = 'track';
            break;
          default:
            mediaItemType = null;
        }
        if (mediaItemType) {
          const mediaItem: ArticleMediaItem = {
            type: mediaItemType,
            name: player.title,
            url: player.tralbum_url,
            imageUrl: '',
            featuredTrackPosition: player.featured_track_number,
            artist: {
              name: player.band_name,
              url: player.band_url,
              imageUrl: '',
              location: player.band_location
            },
            tracks: [],
            mediaItemRef: player.player_id
          };
          if (player.parent_tralbum_type === 'a') {
            mediaItem.type = 'album';
          }
          else if (player.parent_tralbum_type === 't') {
            mediaItem.type = 'track';
          }
          if (player.art_id && opts.albumImageFormat?.id) {
            mediaItem.imageUrl = `${opts.imageBaseUrl}/img/a${player.art_id}_${opts.albumImageFormat.id}.jpg`;
          }
          if (player.band_image_id && mediaItem.artist && opts.artistImageFormat?.id) {
            mediaItem.artist.imageUrl = `${opts.imageBaseUrl}/img/${player.band_image_id}_${opts.artistImageFormat.id}.jpg`;
          }
          if (mediaItemType === 'album' && Array.isArray(player.tracklist)) {
            (mediaItem as Album).tracks = player.tracklist.map((trackInfo: any) => ({
              position: trackInfo.track_number,
              name: trackInfo.track_title,
              duration: trackInfo.audio_track_duration,
              streamUrl: trackInfo.audio_url?.['mp3-128']
            }));
          }

          article.mediaItems.push(mediaItem);
        }
      });
    }

    // Function that returns a section corresponding to a media item
    const _getSectionByPlayer = (player: any) => {
      const section: ArticleSection = {
        html: '',
        text: ''
      };

      // Get heading
      const heading = player.prevUntil('bamplayer-art', 'h3, h2').first();
      if (heading.length > 0) {
        section.heading = {
          html: heading.html(),
          text: stripTags(brToNewLine(heading.html())).trim()
        };
      }

      // Get html and text
      const paragraphs = player.nextUntil('bamplayer-art, h3, h5, article-end', 'p');
      paragraphs.each((i: number, p: any) => {
        p = $(p);
        section.html += (section.html !== '' ? EOL : '') + p.html();
        section.text += (section.text !== '' ? EOL + EOL : '') + p.text();
      });

      // Get mediaItemRef
      const playerIdMatch = player.attr('data-bind').match(/playerMap\["(.+?)"]/);
      if (playerIdMatch?.[1]) {
        section.mediaItemRef = playerIdMatch[1];
      }

      return section;
    };

    // Function that returns the introductory paragraph(s) of the article
    const _getIntroSection = (articleBody: any) => {
      const firstPlayer = articleBody.find('bamplayer-art').first();
      const paragraphs = firstPlayer.length > 0 ? firstPlayer.prevAll('p') : articleBody.find('p');
      if (paragraphs.length > 0) {
        const section = {
          html: '',
          text: ''
        };
        paragraphs.each((i: number, p: any) => {
          p = $(p);
          section.html += (section.html !== '' ? EOL : '') + p.html();
          section.text += (section.text !== '' ? EOL + EOL : '') + p.text();
        });
        return section;
      }

      return null;

    };

    // Sections
    const articleBody = $('#p-daily-article article');
    const sections = [];
    const introSection = _getIntroSection(articleBody);
    if (introSection) {
      sections.push(introSection);
    }
    const bcplayers = articleBody.find('bamplayer-art');
    bcplayers.each((i, player) => {
      sections.push(_getSectionByPlayer($(player)));
    });
    article.sections = sections;

    if (opts.includeRawData) {
      article.raw = {
        basic,
        mediaItems: players,
        body: articleBody.html() || ''
      };
    }

    return article;
  }
}
