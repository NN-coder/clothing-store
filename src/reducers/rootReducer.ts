import { Reducer } from 'redux';
import { SET_SEARCH_TEXT, FETCH_CATALOG_SUCCESS, FETCH_CATALOG_FAILURE } from '../actions';

import { State } from '../types/state';
import { Action } from '../types/action';
import { initialState } from '../store/initialState';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer: Reducer<State, Action<any>> = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: value };

    case FETCH_CATALOG_SUCCESS:
      return { ...state, mensCatalog: { status: 'success', value } };

    case FETCH_CATALOG_FAILURE:
      return { ...state, mensCatalog: { status: 'failure', value } };

    default:
      return state;
  }
};

export { rootReducer };
