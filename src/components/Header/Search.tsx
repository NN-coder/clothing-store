import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

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

const SearchBtn = styled.button<{ highlighting: boolean }>`
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
  setSearchValue: (text: string) => void;
  className?: string;
}

const Search = styled(({ className, searchValue, setSearchValue }: Props) => {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  const handleInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => setLocalSearchValue(target.value),
    []
  );

  const handleClearBtnClick = useCallback(() => {
    setLocalSearchValue('');
    setSearchValue('');
  }, [setSearchValue]);

  return (
    <div className={className}>
      <SearchInput
        value={localSearchValue}
        onChange={handleInputChange}
        onKeyPress={({ code }) => code === 'Enter' && setSearchValue(localSearchValue)}
      />
      {localSearchValue.length !== 0 && (
        <ClearBtn onClick={handleClearBtnClick}>
          <MdClose size="24px" />
        </ClearBtn>
      )}
      <SearchBtn
        type="button"
        highlighting={localSearchValue.length !== 0}
        onClick={() => setSearchValue(localSearchValue)}
      >
        <FiSearch />
      </SearchBtn>
    </div>
  );
})`
  position: relative;
  width: 100%;
  max-width: 760px;
  color: var(--standard-color);
`;

export { Search };
