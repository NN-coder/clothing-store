import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/rootReducer';
import { State } from '../types/state';
import { initialState } from './initialState';

const store: Store<State> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
