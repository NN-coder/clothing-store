/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Catalog as CatalogState } from '../../types/catalog';
import { Gender } from '../../types/products';
import { CatalogItem } from './CatalogItem';

const CatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px 20px;
  max-width: 1350px;
  margin: 30px auto;
`;

export interface Props {
  catalog: CatalogState;
  fetchCatalog: (url: string) => void;
  filterByGender: (gender: Gender) => void;
}

const Catalog: React.FC<Props> = ({ catalog, fetchCatalog, filterByGender }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    filterByGender(pathname === '/men' ? 'male' : 'female');

    if (catalog.status === 'loading') {
      fetchCatalog(`${process.env.PUBLIC_URL}/catalog.json`);
    }
  }, []);

  return (
    <section>
      <CatalogWrapper>
        {catalog.status === 'success' &&
          catalog.fetchResult.map(({ id, ...product }) => <CatalogItem key={id} {...product} />)}
      </CatalogWrapper>
    </section>
  );
};

export { Catalog };
