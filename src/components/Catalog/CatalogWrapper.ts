import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { Catalog as CatalogState } from '../../types/catalog';
import { Filters } from '../../types/filters';
import { fetchCatalog } from '../../actions/catalogActions';
import { filterByGender } from '../../actions/filterActions';
import { Catalog, Props as CatalogProps } from './Catalog';

const getFilteredCatalog = (catalog: CatalogState, filters: Filters): CatalogState => {
  if (catalog.status === 'success') {
    let filteredCatalog = catalog.fetchResult;

    filteredCatalog = filteredCatalog.filter(({ title }) =>
      title.toLowerCase().includes(filters.byTitle.toLowerCase())
    );

    if (filters.byGender) {
      filteredCatalog = filteredCatalog.filter(({ gender }) => gender === filters.byGender);
    }

    return { ...catalog, fetchResult: filteredCatalog };
  }

  return catalog;
};

const mapStateToProps = ({ catalog, filters }: State): Pick<CatalogProps, 'catalog'> => ({
  catalog: getFilteredCatalog(catalog, filters),
});

const mapDispatchToProps = (
  dispatch: Dispatch
): Pick<CatalogProps, 'fetchCatalog' | 'filterByGender'> => ({
  fetchCatalog: bindActionCreators(fetchCatalog, dispatch),
  filterByGender: bindActionCreators(filterByGender, dispatch),
});

const MensCatalog = connect(mapStateToProps, mapDispatchToProps)(Catalog);
const WomensCatalog = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export { MensCatalog, WomensCatalog };
