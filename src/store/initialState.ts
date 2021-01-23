import { State } from '../types/state';

const initialState: State = {
  searchText: '',
  mensCatalog: { status: 'loading', value: null },
  womensCatalog: { status: 'loading', value: null },
};

export { initialState };
