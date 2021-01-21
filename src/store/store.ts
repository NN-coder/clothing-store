import { createStore, Store } from 'redux';

import { rootReducer } from '../reducers/rootReducer';
import { State } from '../types';
import { initialState } from './initialState';

const store: Store<State> = createStore(rootReducer, initialState);

export { store };
