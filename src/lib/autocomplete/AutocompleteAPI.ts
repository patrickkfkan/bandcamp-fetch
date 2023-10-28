import { URLS } from '../utils/Constants';
import { AutoCompleteTag, AutocompleteLocation } from '../types/Autocomplete';
import AutocompleteResultsParser from './AutocompleteResultsParser';
import Limiter from '../utils/Limiter';
import BaseAPI, { BaseAPIParams } from '../common/BaseAPI';
import { FetchMethod } from '../utils/Fetcher';

export enum AutocompleteItemType {
  Tag = 'Tag',
  Location = 'Location'
}

export interface AutocompleteAPIGetSuggestionsParams {
  query: string;
  itemType: AutocompleteItemType;
  limit?: number;
}

export default class AutocompleteAPI extends BaseAPI {

  getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Location }): Promise<AutocompleteLocation[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Tag }): Promise<AutoCompleteTag[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<AutoCompleteTag[] | AutocompleteLocation[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    if (params.itemType === AutocompleteItemType.Tag) {
      return this.getAutocompleteTags(params);
    }

    return this.getAutocompleteLocations(params);
  }

  /**
   * @internal
   */
  protected async getAutocompleteTags(params: AutocompleteAPIGetSuggestionsParams) {
    const payload = {
      search_term: params.query,
      count: params.limit || 5
    };

    const json = await this.fetch(URLS.AUTOCOMPLETE.TAG, true, FetchMethod.POST, payload);
    return AutocompleteResultsParser.parseTags(json);
  }

  /**
   * @internal
   */
  protected async getAutocompleteLocations(params: AutocompleteAPIGetSuggestionsParams) {
    const payload = {
      q: params.query,
      n: params.limit || 5,
      geocoder_fallback: true
    };

    const json = await this.fetch(URLS.AUTOCOMPLETE.LOCATION, true, FetchMethod.POST, payload);
    return AutocompleteResultsParser.parseLocations(json);
  }
}

export class LimiterAutocompleteAPI extends AutocompleteAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Location; }): Promise<AutocompleteLocation[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams & { itemType: AutocompleteItemType.Tag; }): Promise<AutoCompleteTag[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<AutocompleteLocation[] | AutoCompleteTag[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    return this.#limiter.schedule(() => super.getSuggestions(params));
  }
}
