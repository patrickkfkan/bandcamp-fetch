const SITE_URL = 'https://bandcamp.com';
const API_URL = `${SITE_URL}/api`;

export const URLS = {
  SITE_URL,
  DISCOVER: {
    SITE: `${SITE_URL}/discover`,
    API: `${API_URL}/discover/1/discover_web`
  },
  RELATED_TAGS: `${API_URL}/tag_search/2/related_tags`,
  DIG_DEEPER: `${API_URL}/hub/2/dig_deeper`,
  DAILY: 'https://daily.bandcamp.com',
  SHOW: `${API_URL}/bcradio_api/1/get_show`,
  SHOWS: `${API_URL}/bcweekly/3/list`,
  FAN_CONTINUATION: {
    COLLECTION: `${API_URL}/fancollection/1/collection_items`,
    WISHLIST: `${API_URL}/fancollection/1/wishlist_items`,
    FOLLOWING_BANDS: `${API_URL}/fancollection/1/following_bands`,
    FOLLOWING_GENRES: `${API_URL}/fancollection/1/following_genres`
  },
  SEARCH: `${SITE_URL}/search`,
  AUTOCOMPLETE: {
    TAG: `${API_URL}/bcsearch_public_api/1/tag_search`,
    LOCATION: `${API_URL}/location/1/geoname_search`
  },
  REFRESH_STREAM: `${API_URL}/stream/1/refresh`
};
