import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { removeFromSavedItems } from '../../actions/savedItemsActions';
import { SavedItems, Props as SavedItemsProps } from './SavedItems';

const mapStateToProps = ({
  catalog,
  savedItems,
}: State): Pick<SavedItemsProps, 'catalog' | 'savedItems'> => ({
  catalog,
  savedItems,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<SavedItemsProps, 'removeFromSavedItems'> => ({
  removeFromSavedItems: bindActionCreators(removeFromSavedItems, dispatch),
});

const SavedItemsWrapper = connect(mapStateToProps, mapDispatchToProps)(SavedItems);

export { SavedItemsWrapper };
