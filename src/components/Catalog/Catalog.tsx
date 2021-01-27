/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

import { Catalog as CatalogState } from '../../types/catalog';
import { Gender } from '../../types/products';
import { CatalogItemWrapper } from './CatalogItem/CatalogItemWrapper';
import { SavedItemsContext } from './savedItemsContext';

const CatalogWrapper = styled.div`
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
  const { pathname } = useLocation();

  useEffect(() => {
    filterByGender(pathname === '/men' ? 'male' : 'female');

    if (catalog.status === 'loading') fetchCatalog(`${process.env.PUBLIC_URL}/catalog.json`);
  }, [pathname, filterByGender, fetchCatalog, catalog.status]);

  return (
    <IconContext.Provider value={{ size: '20px', style: { marginTop: '5px' } }}>
      <SavedItemsContext.Provider value={savedItems}>
        <section>
          <CatalogWrapper>
            {catalog.status === 'success' &&
              catalog.fetchResult.map((product) => (
                <CatalogItemWrapper key={product.id} product={product} />
              ))}
          </CatalogWrapper>
        </section>
      </SavedItemsContext.Provider>
    </IconContext.Provider>
  );
};

export { Catalog };
