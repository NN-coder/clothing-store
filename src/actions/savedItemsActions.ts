import { Action } from '../types/actions';
import { createActionCreator } from './createActionCreator';

type AddToSavedItemsAction = Action<'ADD_TO_SAVED_ITEMS', string>;
type RemoveFromSavedItemsAction = Action<'REMOVE_FROM_SAVED_ITEMS', string>;

const addToSavedItems = createActionCreator<AddToSavedItemsAction>('ADD_TO_SAVED_ITEMS');
const removeFromSavedItems = createActionCreator<RemoveFromSavedItemsAction>(
  'REMOVE_FROM_SAVED_ITEMS'
);

export { addToSavedItems, removeFromSavedItems };
