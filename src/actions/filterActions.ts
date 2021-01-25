import { Action } from '../types/action';
import { Category, Gender, Subcategory } from '../types/products';

type FilterByTitleAction = Action<'FILTER_BY_TITLE', string>;
type FilterByPriceAction = Action<'FILTER_BY_PRICE', [number, number]>;
type FilterByGenderAction = Action<'FILTER_BY_GENDER', Gender | null>;
type FilterByCategoryAction = Action<'FILTER_BY_CATEGORY', Category | null>;
type FilterBySubcategoryAction = Action<'FILTER_BY_SUBCATEGORY', Subcategory | null>;

export type FilterActions =
  | FilterByTitleAction
  | FilterByPriceAction
  | FilterByGenderAction
  | FilterByCategoryAction
  | FilterBySubcategoryAction;

export const filterByTitle = (title: string): FilterByTitleAction => ({
  type: 'FILTER_BY_TITLE',
  payload: title,
});

export const filterByPrice = (range: [number, number]): FilterByPriceAction => ({
  type: 'FILTER_BY_PRICE',
  payload: range,
});

export const filterByGender = (gender: Gender | null): FilterByGenderAction => ({
  type: 'FILTER_BY_GENDER',
  payload: gender,
});

export const filterByCategory = (category: Category | null): FilterByCategoryAction => ({
  type: 'FILTER_BY_CATEGORY',
  payload: category,
});

export const filterBySubcategory = (
  subcategory: Subcategory | null
): FilterBySubcategoryAction => ({
  type: 'FILTER_BY_SUBCATEGORY',
  payload: subcategory,
});
