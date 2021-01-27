import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const HeaderLink = styled(Link)`
  color: white;
`;

export interface Props {
  className?: string;
}

const HeaderButtons = styled(({ className }: Props) => (
  <div className={className}>
    <HeaderLink to="/" aria-label="Bag">
      <FaShoppingCart />
    </HeaderLink>
    <HeaderLink to="/saved-items" aria-label="Saved items ">
      <FaHeart />
    </HeaderLink>
  </div>
))`
  ${HeaderLink} + ${HeaderLink} {
    margin-left: 20px;
  }
`;

export { HeaderButtons };
