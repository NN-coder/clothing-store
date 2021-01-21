import { Action } from './types';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const setSearchText = (text: string): Action<string> => ({
  type: SET_SEARCH_TEXT,
  value: text,
});
