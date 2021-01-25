import { Catalog } from './catalog';
import { Filters } from './filters';

export interface State {
  catalog: Catalog;
  filters: Filters;
}
