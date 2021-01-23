import { Reducer } from 'redux';

import {
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CatalogActions,
} from '../actions/catalogActions';
import { CatalogState } from '../types/catalog';

const initialState: CatalogState = { status: 'loading', value: null };

const catalogReducer: Reducer<CatalogState, CatalogActions> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_FAILURE:
      return { status: 'failure', value: action.value };

    case FETCH_CATALOG_SUCCESS:
      return { status: 'success', value: action.value };

    default:
      return state;
  }
};

export { catalogReducer };
