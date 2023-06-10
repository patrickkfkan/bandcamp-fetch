import bcfetch, { AutocompleteAPIGetSuggestionsParams, AutocompleteItemType } from '../../';
import util from 'util';

const autocompleteTagParams = {
  itemType: AutocompleteItemType.Tag,
  query: 'ambient',
  limit: 10
} as const;

const autocompleteLocationParams = {
  itemType: AutocompleteItemType.Location,
  query: 'Fin',
  limit: 10
} as const;

function printResults(results: any, params: AutocompleteAPIGetSuggestionsParams) {
  const title = `Autocomplete ${params.itemType.toLowerCase()} suggestions: ${params.query}, Limit: ${params.limit}`;
  console.log(title);
  console.log('-'.repeat(title.length));
  console.log(util.inspect(results, false, null, false));
  console.log('');
}

bcfetch.autocomplete.getSuggestions(autocompleteTagParams).then((results) => {
  printResults(results, autocompleteTagParams);
});

bcfetch.autocomplete.getSuggestions(autocompleteLocationParams).then((results) => {
  printResults(results, autocompleteLocationParams);
});
