/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Catalog as CatalogState } from '../../types/catalog';
import { Gender } from '../../types/products';
import { FilterWrapper } from '../Filter/FilterWrapper';
import { CatalogItemWrapper } from './CatalogItem/CatalogItemWrapper';
import { SavedItemsContext } from './savedItemsContext';

const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px 20px;
  max-width: 1350px;
  margin: 30px auto;
`;

export interface Props {
  catalog: CatalogState;
  savedItems: string[];
  fetchCatalog: (url: string) => void;
  filterByGender: (gender: Gender) => void;
}

const Catalog: React.FC<Props> = ({ catalog, fetchCatalog, filterByGender, savedItems }) => {
  const { gender } = useParams<{ gender: Gender }>();

  useEffect(() => {
    if (catalog.status === 'loading') fetchCatalog(`${process.env.PUBLIC_URL}/catalog.json`);

    filterByGender(gender);
  }, [gender, filterByGender, fetchCatalog, catalog.status]);

  return (
    <>
      <FilterWrapper />
      <SavedItemsContext.Provider value={savedItems}>
        <section>
          <CatalogContainer>
            {catalog.status === 'success' &&
              catalog.fetchResult.map((product) => (
                <CatalogItemWrapper key={product.id} product={product} />
              ))}
          </CatalogContainer>
        </section>
      </SavedItemsContext.Provider>
    </>
  );
};

export { Catalog };
