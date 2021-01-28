import { Action } from '../types/action';

type AddToSavedItemsAction = Action<'ADD_TO_SAVED_ITEMS', string>;
type RemoveFromSavedItemsAction = Action<'REMOVE_FROM_SAVED_ITEMS', string>;

export type SavedItemsActions = AddToSavedItemsAction | RemoveFromSavedItemsAction;

const addToSavedItems = (productID: string): AddToSavedItemsAction => ({
  type: 'ADD_TO_SAVED_ITEMS',
  payload: productID,
});

const removeFromSavedItems = (productID: string): RemoveFromSavedItemsAction => ({
  type: 'REMOVE_FROM_SAVED_ITEMS',
  payload: productID,
});

export { addToSavedItems, removeFromSavedItems };
