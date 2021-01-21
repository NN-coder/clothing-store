export interface State {
  searchText: string;
}

export type Action<T> = { type: string; value: T };
