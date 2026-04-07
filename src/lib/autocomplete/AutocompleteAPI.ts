import { URLS } from '../utils/Constants.js';
import {
  type AutoCompleteTag,
  type AutocompleteLocation
} from '../types/Autocomplete.js';
import AutocompleteResultsParser from './AutocompleteResultsParser.js';
import type Limiter from '../utils/Limiter.js';
import BaseAPI, { type BaseAPIParams } from '../common/BaseAPI.js';
import { FetchMethod } from '../utils/Fetcher.js';

export enum AutocompleteItemType {
  Tag = 'Tag',
  Location = 'Location'
}

export type AutocompleteAPIGetSuggestionsParams =
  | {
      query: string;
      itemType: AutocompleteItemType.Location;
      limit?: number;
    }
  | {
      query: string;
      itemType: AutocompleteItemType.Tag;
    };

export default class AutocompleteAPI extends BaseAPI {
  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Location;
    }
  ): Promise<AutocompleteLocation[]>;
  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Tag;
    }
  ): Promise<AutoCompleteTag[]>;
  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams
  ): Promise<AutoCompleteTag[] | AutocompleteLocation[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    if (params.itemType === AutocompleteItemType.Tag) {
      return this.getAutocompleteTags(params);
    }

    return this.getAutocompleteLocations(params);
  }

  /**
   * @internal
   */
  protected async getAutocompleteTags(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Tag;
    }
  ) {
    const payload = {
      prefix: params.query
    };

    const json = await this.fetch(
      URLS.AUTOCOMPLETE.TAG,
      true,
      FetchMethod.POST,
      payload
    );
    return AutocompleteResultsParser.parseTags(json);
  }

  /**
   * @internal
   */
  protected async getAutocompleteLocations(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Location;
    }
  ) {
    const payload = {
      q: params.query,
      n: params.limit || 5,
      geocoder_fallback: true
    };

    const json = await this.fetch(
      URLS.AUTOCOMPLETE.LOCATION,
      true,
      FetchMethod.POST,
      payload
    );
    return AutocompleteResultsParser.parseLocations(json);
  }
}

export class LimiterAutocompleteAPI extends AutocompleteAPI {
  #limiter: Limiter;

  constructor(params: BaseAPIParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Location;
    }
  ): Promise<AutocompleteLocation[]>;
  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams & {
      itemType: AutocompleteItemType.Tag;
    }
  ): Promise<AutoCompleteTag[]>;
  getSuggestions(
    params: AutocompleteAPIGetSuggestionsParams
  ): Promise<AutocompleteLocation[] | AutoCompleteTag[]>;
  getSuggestions(params: AutocompleteAPIGetSuggestionsParams): Promise<any> {
    return this.#limiter.schedule(() => super.getSuggestions(params));
  }
}
