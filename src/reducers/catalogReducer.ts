import { Reducer } from 'redux';

import { fetchCatalogSuccess, fetchCatalogFailure } from '../actions/catalogActions';
import { Catalog } from '../types/catalog';

const initialState: Catalog = { status: 'loading', fetchResult: null };

const catalogReducer: Reducer<Catalog> = (state = initialState, action) => {
  switch (action.type) {
    case fetchCatalogSuccess.type:
      return { status: 'success', fetchResult: action.payload };

    case fetchCatalogFailure.type:
      return { status: 'failure', fetchResult: action.payload };

    default:
      return state;
  }
};

export { catalogReducer };
