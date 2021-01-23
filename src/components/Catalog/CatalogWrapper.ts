import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { fetchCatalog } from '../../actions';
import { Catalog, Props as CatalogProps } from './Catalog';

const mapStateToProps = (state: State): Pick<CatalogProps, 'catalog'> => ({
  catalog: state.mensCatalog,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<CatalogProps, 'fetchCatalog'> => ({
  fetchCatalog: bindActionCreators(fetchCatalog, dispatch),
});

const CatalogWrapper = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export { CatalogWrapper };
