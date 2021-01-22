/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { createStore, Store } from 'redux';

import { rootReducer } from '../reducers/rootReducer';
import { State } from '../types';
import { initialState } from './initialState';

const store: Store<State> = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
