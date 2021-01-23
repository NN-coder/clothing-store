import { CatalogState } from './catalog';

export interface State {
  searchText: string;
  mensCatalog: CatalogState;
  womensCatalog: CatalogState;
}
