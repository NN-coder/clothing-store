import { CatalogState } from './catalog';

export interface State {
  searchText: string;
  catalog: CatalogState;
}
