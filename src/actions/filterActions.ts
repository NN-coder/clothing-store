import { Action } from '../types/action';
import { SortBy } from '../types/filters';
import { Category, Gender, Subcategory } from '../types/products';

type SortAction = Action<'SORT', SortBy>;
type FilterByTitleAction = Action<'FILTER_BY_TITLE', string>;
type FilterByPriceAction = Action<'FILTER_BY_PRICE', [number, number]>;
type FilterByGenderAction = Action<'FILTER_BY_GENDER', Gender | null>;
type FilterByCategoryAction = Action<'FILTER_BY_CATEGORY', Category | null>;
type FilterBySubcategoryAction = Action<'FILTER_BY_SUBCATEGORY', Subcategory | null>;

export type FilterActions =
  | SortAction
  | FilterByTitleAction
  | FilterByPriceAction
  | FilterByGenderAction
  | FilterByCategoryAction
  | FilterBySubcategoryAction;

const sort = (by: SortBy): SortAction => ({
  type: 'SORT',
  payload: by,
});

const filterByTitle = (title: string): FilterByTitleAction => ({
  type: 'FILTER_BY_TITLE',
  payload: title,
});

const filterByPrice = (range: [number, number]): FilterByPriceAction => ({
  type: 'FILTER_BY_PRICE',
  payload: range,
});

const filterByGender = (gender: Gender | null): FilterByGenderAction => ({
  type: 'FILTER_BY_GENDER',
  payload: gender,
});

const filterByCategory = (category: Category | null): FilterByCategoryAction => ({
  type: 'FILTER_BY_CATEGORY',
  payload: category,
});

const filterBySubcategory = (subcategory: Subcategory | null): FilterBySubcategoryAction => ({
  type: 'FILTER_BY_SUBCATEGORY',
  payload: subcategory,
});

export {
  sort,
  filterByTitle,
  filterByPrice,
  filterByGender,
  filterByCategory,
  filterBySubcategory,
};
