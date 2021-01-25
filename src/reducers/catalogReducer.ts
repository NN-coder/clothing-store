import { Reducer } from 'redux';

import { CatalogActions } from '../actions/catalogActions';
import { Catalog } from '../types/catalog';

const initialState: Catalog = { status: 'loading', fetchResult: null };

const catalogReducer: Reducer<Catalog, CatalogActions> = (state = initialState, action) => {
  if (action.type === 'FETCH_CATALOG_FAILURE')
    return { status: 'failure', fetchResult: action.payload };

  if (action.type === 'FETCH_CATALOG_SUCCESS')
    return { status: 'success', fetchResult: action.payload };

  return state;
};

export { catalogReducer };
