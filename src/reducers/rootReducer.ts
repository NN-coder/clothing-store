import { combineReducers } from 'redux';

import { catalogReducer } from './catalogReducer';
import { filtersReducer } from './filtersReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filters: filtersReducer,
});

export { rootReducer };
