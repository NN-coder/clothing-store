import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const HeaderLink = styled(Link)`
  color: white;
  & + & {
    margin-left: 20px;
  }
`;

const HeaderButtons: React.FC = () => (
  <div>
    <HeaderLink to="/" aria-label="Bag">
      <FaShoppingCart />
    </HeaderLink>
    <HeaderLink to="/saved-items" aria-label="Saved items ">
      <FaHeart />
    </HeaderLink>
  </div>
);

export { HeaderButtons };
