import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/rootReducer';
import { State } from '../types/state';

const saveState = (state: State) => {
  const stateJSON = JSON.stringify(state);
  window.sessionStorage.setItem('appState', stateJSON);
};

const loadState = () => {
  const savedState = window.sessionStorage.getItem('appState');
  return savedState ? (JSON.parse(savedState) as State) : undefined;
};

const savedState = loadState();

const store: Store<State> = createStore(
  rootReducer,
  savedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveState(store.getState()));

export { store };
