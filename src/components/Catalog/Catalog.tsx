/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { CatalogState } from '../../types/catalog';
import { CatalogItem } from './CatalogItem';

const CatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px 10px;
  max-width: 1350px;
  margin: 30px auto;
`;

export interface Props {
  catalog: CatalogState;
  fetchCatalog: (url: string) => void;
}

const Catalog: React.FC<Props> = ({ catalog, fetchCatalog }) => {
  useEffect(() => {
    fetchCatalog(`${process.env.PUBLIC_URL}/json/mensCatalog.json`);
  }, [fetchCatalog]);

  return (
    <section>
      <CatalogWrapper>
        {catalog.status === 'success' &&
          catalog.value.map(({ id, ...product }) => <CatalogItem key={id} {...product} />)}
      </CatalogWrapper>
    </section>
  );
};

export { Catalog };
