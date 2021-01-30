import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { sort } from '../../actions/filterActions';
import { StyledFilter, Props as StyledFilterProps } from './StyledFilter';

const mapStateToProps = (state: State): Pick<StyledFilterProps, 'currentSort'> => ({
  currentSort: state.filters.sortBy,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<StyledFilterProps, 'sort'> => ({
  sort: bindActionCreators(sort, dispatch),
});

const FilterWrapper = connect(mapStateToProps, mapDispatchToProps)(StyledFilter);

export { FilterWrapper };
