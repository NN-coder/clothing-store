import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';

import { SearchWrapper } from './SearchWrapper';
import { HeaderButtons } from './HeaderButtons';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
`;
const Logo = styled.h1`
  margin: 0;
  color: white;
  font-weight: 700;
  font-size: 3.5rem;
  text-transform: uppercase;
`;

export interface Props {
  className?: string;
}

const Header = styled(({ className }: Props) => (
  <IconContext.Provider value={{ size: '20px' }}>
    <header className={className}>
      <HeaderContainer>
        <Logo>
          <a href="/">Store</a>
        </Logo>
        <SearchWrapper />
        <HeaderButtons />
      </HeaderContainer>
    </header>
  </IconContext.Provider>
))`
  padding: 10px 0;
  background-color: #2d2d2d;
`;

export { Header };
