import { combineReducers } from 'redux';

import { searchReducer } from './searchReducer';
import { catalogReducer } from './catalogReducer';

const rootReducer = combineReducers({
  searchText: searchReducer,
  catalog: catalogReducer,
});

export { rootReducer };
