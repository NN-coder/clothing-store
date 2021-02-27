import { Reducer } from 'redux';
import { addToSavedItems, removeFromSavedItems } from '../actions/savedItemsActions';

const initialState: string[] = [];

const savedItemsReducer: Reducer<string[]> = (state = initialState, action) => {
  switch (action.type) {
    case addToSavedItems.type:
      return Array.from(new Set([...state, action.payload]));

    case removeFromSavedItems.type: {
      const stateSet = new Set(state);
      stateSet.delete(action.payload);
      return Array.from(stateSet);
    }

    default:
      return state;
  }
};

export { savedItemsReducer };
