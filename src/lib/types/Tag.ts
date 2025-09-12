interface Tag {
  type: 'tag';
  name: string;
  value: string;
  imageUrls?: string[];
}

export interface RelatedTags {
  /**
   * List of tags and the related tags for each entry.
   */
  single: Array<{ tag: Tag, related: Tag[] }>;
  /**
   * The combined related tags if there are multiple tags involved.
   */
  combo: Tag[];
}

export default Tag;
