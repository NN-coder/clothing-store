import { Category, Gender, Subcategory } from './products';

export interface Filters {
  byTitle: string;
  byPrice: [number, number];
  byGender: Gender | null;
  byCategory: Category | null;
  bySubcategory: Subcategory | null;
}
