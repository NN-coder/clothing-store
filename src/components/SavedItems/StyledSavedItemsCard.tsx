import React from 'react';
import styled from 'styled-components/macro';
import { BsTrash } from 'react-icons/bs';

import { ProductsItem } from '../../types/products';

const Img = styled.img`
  width: 100%;
  height: 410px;
  object-fit: cover;
`;
const Title = styled.p`
  height: 45px;
  margin-top: 10px;
  line-height: 20px;
`;
const Price = styled.div`
  margin-top: 10px;
  color: #666;
  font-weight: 700;
`;
const RemoveFromSavedItemsBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  cursor: default;
  svg {
    margin-top: 4px;
  }
`;
const ToBagBtn = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 15px;
  color: #2d2d2d;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #018849;
`;

export interface Props {
  product: Pick<ProductsItem, 'price' | 'title' | 'img'>;
  removeFromSavedItems: () => void;
  className?: string;
}

const SavedItemsCard: React.FC<Props> = ({ className, product, removeFromSavedItems }) => {
  const { price, title, img } = product;
  const productPrice = `$${price.toFixed(2)}`;

  return (
    <article className={className}>
      <a href="/" aria-label={`${title}; Price: ${productPrice}`}>
        <Img alt="" src={img} />
        <Title>{title}</Title>
        <Price>{productPrice}</Price>
      </a>
      <ToBagBtn type="button">Move to cart</ToBagBtn>
      <RemoveFromSavedItemsBtn type="button" onClick={removeFromSavedItems}>
        <BsTrash />
      </RemoveFromSavedItemsBtn>
    </article>
  );
};

const StyledSavedItemsCard = styled(SavedItemsCard)`
  position: relative;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
`;

export { StyledSavedItemsCard };
