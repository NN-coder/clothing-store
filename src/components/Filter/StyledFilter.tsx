import React from 'react';
import styled from 'styled-components/macro';

import { SortBy } from '../../types/filters';
import { Category } from '../../types/products';

import { StyledFilterDropdown } from './StyledFilterDropdown';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1350px;
  margin: 0 auto;
`;

export interface Props {
  sort: (by: SortBy) => void;
  filterByCategory: (category: Category | null) => void;
  className?: string;
}

const Filter: React.FC<Props> = ({ sort, filterByCategory, className }) => (
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
      <StyledFilterDropdown
        btnText="Category"
        listItems={{
          Clear: () => filterByCategory(null),
          Clothing: () => filterByCategory('clothing'),
          Shoes: () => filterByCategory('shoes'),
          Accessories: () => filterByCategory('accessories'),
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
