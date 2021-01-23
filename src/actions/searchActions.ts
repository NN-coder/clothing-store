import { Action } from '../types/action';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export type SetSearchTextAction = Action<string, typeof SET_SEARCH_TEXT>;

export const setSearchText = (text: string): SetSearchTextAction => ({
  type: SET_SEARCH_TEXT,
  value: text,
});
