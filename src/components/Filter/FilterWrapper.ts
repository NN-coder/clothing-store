import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { filterByCategory, sort } from '../../actions/filterActions';
import { StyledFilter, Props as StyledFilterProps } from './StyledFilter';

const mapDispatchToProps = (
  dispatch: Dispatch
): Pick<StyledFilterProps, 'sort' | 'filterByCategory'> => ({
  sort: bindActionCreators(sort, dispatch),
  filterByCategory: bindActionCreators(filterByCategory, dispatch),
});

const FilterWrapper = connect(null, mapDispatchToProps)(StyledFilter);

export { FilterWrapper };
