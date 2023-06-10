import { URLS } from '../utils/Constants';
import { FetchMethod, fetchPage } from '../utils/Fetch';
import { AutoCompleteTag, AutocompleteLocation } from '../types/Autocomplete';
import AutocompleteResultsParser from './AutocompleteResultsParser';
import Limiter from '../utils/Limiter';

export enum AutocompleteItemType {
  Tag = 'Tag',
  Location = 'Location'
}

export interface AutocompleteAPIGetSuggestionsParams {
  query: string;
  itemType: AutocompleteItemType;
  limit?: number;
}

export default class AutocompleteAPI {

  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Location }): Promise<AutocompleteLocation[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Tag }): Promise<AutoCompleteTag[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<AutoCompleteTag[] | AutocompleteLocation[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    if (params.itemType === AutocompleteItemType.Tag) {
      return this.#getAutocompleteTags(params);
    }

    return this.#getAutocompleteLocations(params);
  }

  static async #getAutocompleteTags(params: AutocompleteAPIGetSuggestionsParams) {
    const payload = {
      search_term: params.query,
      count: params.limit || 5
    };

    const json = await fetchPage(URLS.AUTOCOMPLETE.TAG, true, FetchMethod.POST, payload);
    return AutocompleteResultsParser.parseTags(json);
  }

  static async #getAutocompleteLocations(params: AutocompleteAPIGetSuggestionsParams) {
    const payload = {
      q: params.query,
      n: params.limit || 5,
      geocoder_fallback: true
    };

    const json = await fetchPage(URLS.AUTOCOMPLETE.LOCATION, true, FetchMethod.POST, payload);
    return AutocompleteResultsParser.parseLocations(json);
  }
}

export class LimiterAutocompleteAPI extends AutocompleteAPI {

  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Location; }): Promise<AutocompleteLocation[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Tag; }): Promise<AutoCompleteTag[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<AutocompleteLocation[] | AutoCompleteTag[]>;
  static getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    return Limiter.schedule(() => super.getSuggestions(params));
  }
}
