import { Reducer } from 'redux';

import {
  sort,
  filterByTitle,
  filterByPrice,
  filterByGender,
  filterByCategory,
  filterBySubcategory,
} from '../actions/filterActions';
import { Filters } from '../types/filters';

const initialState: Filters = {
  sortBy: 'novelty',
  byTitle: '',
  byPrice: [-Infinity, Infinity],
  byGender: null,
  byCategory: null,
  bySubcategory: null,
};

const filtersReducer: Reducer<Filters> = (state = initialState, action) => {
  switch (action.type) {
    case sort.type:
      return { ...state, sortBy: action.payload };

    case filterByTitle.type:
      return { ...state, byTitle: action.payload };

    case filterByPrice.type:
      return { ...state, byPrice: action.payload };

    case filterByGender.type:
      return { ...state, byGender: action.payload };

    case filterByCategory.type:
      return { ...state, byCategory: action.payload };

    case filterBySubcategory.type:
      return { ...state, bySubcategory: action.payload };

    default:
      return state;
  }
};

export { filtersReducer };
