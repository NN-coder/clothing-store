import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { CatalogItem as Product } from '../../types/catalog';

const ItemLink = styled.a`
  display: flex;
  flex-direction: column;
  color: var(--standard-color);
  font-size: 1.4rem;
  row-gap: 10px;
`;
const ItemImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ItemTitle = styled.p`
  height: 45px;
  line-height: 20px;
`;
const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

export type Props = Pick<Product, 'title' | 'price' | 'img'>;

const CatalogItem: React.FC<Props> = ({ title, price, img }) => {
  const itemPrice = `$${price.toFixed(2)}`;

  return (
    <article style={{ position: 'relative' }}>
      <ItemLink href="/" aria-label={`${title}; Price: ${itemPrice}`}>
        <LazyLoad once offset={100}>
          <ItemImg alt="" src={img} />
        </LazyLoad>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>{itemPrice}</ItemPrice>
      </ItemLink>
    </article>
  );
};

export { CatalogItem };
