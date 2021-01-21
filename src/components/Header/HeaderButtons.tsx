import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Button = styled.button.attrs({
  type: 'button',
})`
  color: white;
`;

export interface Props {
  className?: string;
}

const HeaderButtons = styled(({ className }: Props) => (
  <div className={className}>
    <Button aria-label="Bag">
      <FaShoppingCart />
    </Button>
    <Button aria-label="Saved items ">
      <FaHeart />
    </Button>
  </div>
))`
  button + button {
    margin-left: 20px;
  }
`;

export { HeaderButtons };
