export interface AutocompleteItem {
  type: 'tag' | 'location';
  name: string;
}

export interface AutoCompleteTag extends AutocompleteItem {
  type: 'tag';
  count: number;
  value: 'string';
}

export interface AutocompleteLocation extends AutocompleteItem {
  type: 'location';
  fullName: string;
  value: number;
}
