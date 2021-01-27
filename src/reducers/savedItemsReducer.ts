import { Reducer } from 'redux';
import { SavedItemsActions } from '../actions/savedItemsActions';

const initialState: string[] = [];

const savedItemsReducer: Reducer<string[], SavedItemsActions> = (state = initialState, action) => {
  if (action.type === 'ADD_TO_SAVED_ITEMS') return Array.from(new Set([...state, action.payload]));

  if (action.type === 'REMOVE_FROM_SAVED_ITEMS') {
    const stateSet = new Set(state);
    stateSet.delete(action.payload);
    return Array.from(stateSet);
  }

  return state;
};

export { savedItemsReducer };
