import { Action } from '../types/actions';
import { SortBy } from '../types/filters';
import { Category, Gender, Subcategory } from '../types/products';
import { createActionCreator } from './createActionCreator';

type SortAction = Action<'SORT', SortBy>;
type FilterByTitleAction = Action<'FILTER_BY_TITLE', string>;
type FilterByPriceAction = Action<'FILTER_BY_PRICE', [number, number]>;
type FilterByGenderAction = Action<'FILTER_BY_GENDER', Gender | null>;
type FilterByCategoryAction = Action<'FILTER_BY_CATEGORY', Category | null>;
type FilterBySubcategoryAction = Action<'FILTER_BY_SUBCATEGORY', Subcategory | null>;

const sort = createActionCreator<SortAction>('SORT');
const filterByTitle = createActionCreator<FilterByTitleAction>('FILTER_BY_TITLE');
const filterByPrice = createActionCreator<FilterByPriceAction>('FILTER_BY_PRICE');
const filterByGender = createActionCreator<FilterByGenderAction>('FILTER_BY_GENDER');
const filterByCategory = createActionCreator<FilterByCategoryAction>('FILTER_BY_CATEGORY');
const filterBySubcategory = createActionCreator<FilterBySubcategoryAction>('FILTER_BY_SUBCATEGORY');

export {
  sort,
  filterByTitle,
  filterByPrice,
  filterByGender,
  filterByCategory,
  filterBySubcategory,
};
