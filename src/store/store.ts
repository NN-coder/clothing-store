import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';
import { State } from '../types/state';

const saveState = (state: State) => {
  window.sessionStorage.setItem('app_state', JSON.stringify(state));
};

const loadState = () => {
  try {
    const savedState = window.sessionStorage.getItem('app_state');
    return savedState ? (JSON.parse(savedState) as State) : undefined;
  } catch (err) {
    return undefined;
  }
};

const store: Store<State> = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveState(store.getState()));

export { store };
