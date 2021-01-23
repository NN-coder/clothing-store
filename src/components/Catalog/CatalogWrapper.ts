import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { fetchCatalog } from '../../actions/catalogActions';
import { Catalog, Props as CatalogProps } from './Catalog';

const mapStateToProps = ({ catalog }: State): Pick<CatalogProps, 'catalog'> => ({
  catalog,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<CatalogProps, 'fetchCatalog'> => ({
  fetchCatalog: bindActionCreators(fetchCatalog, dispatch),
});

const CatalogWrapper = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export { CatalogWrapper };
