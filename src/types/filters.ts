import { Category, Gender, Subcategory } from './products';

export type SortBy = 'novelty' | 'price_descending' | 'price_ascending';

export interface Filters {
  sortBy: SortBy;
  byTitle: string;
  byPrice: [number, number];
  byGender: Gender | null;
  byCategory: Category | null;
  bySubcategory: Subcategory | null;
}
