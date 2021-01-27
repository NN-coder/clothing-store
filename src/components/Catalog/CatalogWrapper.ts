import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { fetchCatalog } from '../../actions/catalogActions';
import { filterByGender } from '../../actions/filterActions';
import { Catalog, Props as CatalogProps } from './Catalog';
import { getFilteredCatalog } from '../../getFilteredCatalog';

const mapStateToProps = ({
  catalog,
  filters,
  savedItems,
}: State): Pick<CatalogProps, 'catalog' | 'savedItems'> => ({
  catalog: getFilteredCatalog(catalog, filters),
  savedItems,
});

const mapDispatchToProps = (
  dispatch: Dispatch
): Pick<CatalogProps, 'fetchCatalog' | 'filterByGender'> => ({
  fetchCatalog: bindActionCreators(fetchCatalog, dispatch),
  filterByGender: bindActionCreators(filterByGender, dispatch),
});

const CatalogWrapper = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export { CatalogWrapper };
