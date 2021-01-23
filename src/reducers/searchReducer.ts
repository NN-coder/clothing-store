/* eslint-disable sonarjs/no-small-switch */
import { Reducer } from 'redux';

import { SET_SEARCH_TEXT, SetSearchTextAction } from '../actions/searchActions';

const searchReducer: Reducer<string, SetSearchTextAction> = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.value;

    default:
      return state;
  }
};

export { searchReducer };
