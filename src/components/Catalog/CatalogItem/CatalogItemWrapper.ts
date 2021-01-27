import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addToSavedItems } from '../../../actions/savedItemsActions';
import { CatalogItem, Props as CatalogItemProps } from './CatalogItem';

const mapDispatchToProps = (dispatch: Dispatch): Pick<CatalogItemProps, 'addToSavedItems'> => ({
  addToSavedItems: bindActionCreators(addToSavedItems, dispatch),
});

const CatalogItemWrapper = connect(null, mapDispatchToProps)(CatalogItem);

export { CatalogItemWrapper };
