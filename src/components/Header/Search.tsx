import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { Action } from '../../types/action';

const SearchInput = styled.input.attrs({
  type: 'search',
  name: 'search',
  placeholder: 'Search',
})`
  width: 100%;
  height: 40px;
  padding: 0 70px 0 15px;
  color: inherit;
  font-size: 1.5rem;
  border: none;
  border-radius: 19px / 50%;
`;

const SearchIcon = styled.div<{ highlighting: boolean }>`
  position: absolute;
  top: 0;
  right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  color: ${({ highlighting }) => (highlighting ? 'white' : 'inherit')};
  background-color: ${({ highlighting }) => highlighting && '#0770cf'};
  border-radius: 19px / 50%;
`;

const ClearBtn = styled.button.attrs({
  type: 'button',
  'aria-label': 'Clear text',
})`
  position: absolute;

  /* Additional pixel for the correct alignment of the button in the center */
  top: calc(50% + 1px);
  right: 45px;
  color: inherit;
  transform: translateY(-50%);
`;

export interface Props {
  searchValue: string;
  setSearchValue: (text: string) => Action<string>;
  className?: string;
}

const Search = styled(({ className, searchValue, setSearchValue }: Props) => {
  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setSearchValue(target.value),
    [setSearchValue]
  );

  return (
    <div className={className}>
      <SearchInput value={searchValue} onChange={handleChange} />
      {searchValue.length !== 0 && (
        <ClearBtn onClick={() => setSearchValue('')}>
          <MdClose size="24px" />
        </ClearBtn>
      )}
      <SearchIcon highlighting={searchValue.length !== 0}>
        <FiSearch />
      </SearchIcon>
    </div>
  );
})`
  position: relative;
  width: 100%;
  max-width: 760px;
  color: var(--standard-color);
`;

export { Search };
