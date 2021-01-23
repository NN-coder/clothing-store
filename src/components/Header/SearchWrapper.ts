import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State } from '../../types/state';
import { setSearchText } from '../../actions';
import { Search, Props as SearchProps } from './Search';

const mapStateToProps = (state: State): Pick<SearchProps, 'searchValue'> => ({
  searchValue: state.searchText,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<SearchProps, 'setSearchValue'> => ({
  setSearchValue: bindActionCreators(setSearchText, dispatch),
});

const SearchWrapper = connect(mapStateToProps, mapDispatchToProps)(Search);

export { SearchWrapper };
