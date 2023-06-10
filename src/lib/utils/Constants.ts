const SITE_URL = 'https://bandcamp.com';
const API_URL = `${SITE_URL}/api`;

export const URLS = {
  SITE_URL,
  DISCOVER_URL: `${API_URL}/discover/3/get_web`,
  DIG_DEEPER: `${API_URL}/hub/2/dig_deeper`,
  DAILY: 'https://daily.bandcamp.com',
  SHOWS: `${API_URL}/bcweekly/3/list`,
  FAN_CONTINUATION: {
    COLLECTION: `${API_URL}/fancollection/1/collection_items`,
    WISHLIST: `${API_URL}/fancollection/1/wishlist_items`,
    FOLLOWING_BANDS: `${API_URL}/fancollection/1/following_bands`,
    FOLLOWING_GENRES: `${API_URL}/fancollection/1/following_genres`
  },
  SEARCH: `${SITE_URL}/search`,
  AUTOCOMPLETE: {
    TAG: `${API_URL}/fansignup/1/search_tag`,
    LOCATION: `${API_URL}/location/1/geoname_search`
  }
};
