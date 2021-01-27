import React, { useContext } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { ProductsItem } from '../../../types/products';
import { AddToSavedItemsBtn } from '../AddToSavedItemsBtn';
import { SavedItemsContext } from '../savedItemsContext';

const ItemLink = styled.a`
  display: flex;
  flex-direction: column;
  color: var(--standard-color);
  font-size: 1.4rem;
  row-gap: 10px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 410px;
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

export interface Props {
  product: ProductsItem;
  addToSavedItems: (product: string) => void;
}

const CatalogItem: React.FC<Props> = ({ product, addToSavedItems }) => {
  const { price, title, img, id } = product;
  const itemPrice = `$${price.toFixed(2)}`;

  const savedItems = useContext(SavedItemsContext);

  return (
    <article style={{ position: 'relative' }}>
      <ItemLink href="/" aria-label={`${title}; Price: ${itemPrice}`}>
        <LazyLoad offset={100} height={410}>
          <ItemImg alt="" src={img} />
        </LazyLoad>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>{itemPrice}</ItemPrice>
      </ItemLink>

      <AddToSavedItemsBtn
        isAlreadyInSavedItemsList={savedItems?.includes(id)}
        handleClick={() => addToSavedItems(id)}
      />
    </article>
  );
};

export { CatalogItem };
