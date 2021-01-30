import React from 'react';
import styled from 'styled-components';

import { SortBy } from '../../types/filters';

import { StyledFilterDropdown } from './StyledFilterDropdown';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1350px;
  margin: 0 auto;
`;

export interface Props {
  currentSort: SortBy;
  sort: (by: SortBy) => void;
  className?: string;
}

const Filter: React.FC<Props> = ({ className, currentSort, sort }) => (
  <div className={className}>
    <FilterContainer>
      <StyledFilterDropdown
        btnText="Sort"
        listItems={{
          "What's new": () => sort('novelty'),
          'Price low to high': () => sort('price_ascending'),
          'Price high to low': () => sort('price_descending'),
        }}
      />
    </FilterContainer>
  </div>
);

const StyledFilter = styled(Filter)`
  padding: 10px 0;
  background-color: #eee;
`;

export { StyledFilter };
