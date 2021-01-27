import { combineReducers } from 'redux';

import { catalogReducer } from './catalogReducer';
import { filtersReducer } from './filtersReducer';
import { savedItemsReducer } from './savedItemsReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filters: filtersReducer,
  savedItems: savedItemsReducer,
});

export { rootReducer };
