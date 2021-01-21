/* eslint-disable sonarjs/no-small-switch */
import { Reducer } from 'redux';
import { SET_SEARCH_TEXT } from '../actions';

import { State, Action } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer: Reducer<State | undefined, Action<any>> = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.value };
    default:
      return state;
  }
};

export { rootReducer };
