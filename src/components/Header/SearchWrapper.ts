import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { filterByTitle } from '../../actions/filterActions';
import { Search, Props as SearchProps } from './Search';

const mapStateToProps = (state: State): Pick<SearchProps, 'searchValue'> => ({
  searchValue: state.filters.byTitle,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<SearchProps, 'setSearchValue'> => ({
  setSearchValue: bindActionCreators(filterByTitle, dispatch),
});

const SearchWrapper = connect(mapStateToProps, mapDispatchToProps)(Search);

export { SearchWrapper };
