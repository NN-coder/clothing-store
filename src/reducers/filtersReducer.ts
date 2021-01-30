import { Reducer } from 'redux';
import { FilterActions } from '../actions/filterActions';
import { Filters } from '../types/filters';

const initialState: Filters = {
  sortBy: 'novelty',
  byTitle: '',
  byPrice: [-Infinity, Infinity],
  byGender: null,
  byCategory: null,
  bySubcategory: null,
};

const filtersReducer: Reducer<Filters, FilterActions> = (state = initialState, action) => {
  if (action.type === 'SORT') return { ...state, sortBy: action.payload };

  if (action.type === 'FILTER_BY_TITLE') return { ...state, byTitle: action.payload };

  if (action.type === 'FILTER_BY_PRICE') return { ...state, byPrice: action.payload };

  if (action.type === 'FILTER_BY_GENDER') return { ...state, byGender: action.payload };

  if (action.type === 'FILTER_BY_CATEGORY') return { ...state, byCategory: action.payload };

  if (action.type === 'FILTER_BY_SUBCATEGORY') return { ...state, bySubcategory: action.payload };

  return state;
};

export { filtersReducer };
