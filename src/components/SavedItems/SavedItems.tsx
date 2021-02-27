import React from 'react';
import styled from 'styled-components/macro';

import { Catalog } from '../../types/catalog';
import { StyledPlaceholder } from './StyledPlaceholder';
import { StyledSavedItemsCard } from './StyledSavedItemsCard';

const Title = styled.h2`
  padding: 25px 0;
  color: #2d2d2d;
  font-size: 2.4rem;
  text-align: center;
  background-color: #eee;
`;

const SavedItemsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 15px;
  max-width: 1350px;
  margin: 50px auto;
`;

export interface Props {
  catalog: Catalog;
  savedItems: string[];
  removeFromSavedItems: (id: string) => void;
}

const SavedItems: React.FC<Props> = ({ catalog, savedItems, removeFromSavedItems }) => (
  <>
    <Title>Saved Items</Title>
    <SavedItemsInner>
      {savedItems.length === 0 && <StyledPlaceholder />}
      {catalog.status === 'success' &&
        catalog.fetchResult
          .filter(({ id }) => savedItems.includes(id))
          .map(({ id, ...product }) => (
            <StyledSavedItemsCard
              key={id}
              removeFromSavedItems={() => removeFromSavedItems(id)}
              product={product}
            />
          ))}
    </SavedItemsInner>
  </>
);

export { SavedItems };
