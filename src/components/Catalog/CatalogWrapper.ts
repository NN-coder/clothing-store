/* eslint-disable react-redux/connect-prefer-named-arguments */
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { CatalogState } from '../../types/catalog';
import { fetchCatalog } from '../../actions/catalogActions';
import { Catalog, Props as CatalogProps } from './Catalog';

const filterByGender = (catalog: CatalogState, gender: 'male' | 'female'): CatalogState => {
  if (catalog.status === 'success') {
    const { value } = catalog;
    return { ...catalog, value: value.filter((item) => item.gender === gender) };
  }

  return catalog;
};

const getMapStateToProps = (gender: 'male' | 'female') => {
  return ({ catalog }: State): Pick<CatalogProps, 'catalog'> => ({
    catalog: filterByGender(catalog, gender),
  });
};

const mapDispatchToProps = (dispatch: Dispatch): Pick<CatalogProps, 'fetchCatalog'> => ({
  fetchCatalog: bindActionCreators(fetchCatalog, dispatch),
});

const MensCatalog = connect(getMapStateToProps('male'), mapDispatchToProps)(Catalog);
const WomensCatalog = connect(getMapStateToProps('female'), mapDispatchToProps)(Catalog);

export { MensCatalog, WomensCatalog };
