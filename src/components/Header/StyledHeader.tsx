import React from 'react';
import styled from 'styled-components';

import { SearchWrapper } from './SearchWrapper';
import { HeaderButtons } from './HeaderButtons';
import { StyledHeaderNav } from './StyledHeaderNav';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  height: 65px;
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

const Header: React.FC<Props> = ({ className }) => (
  <header className={className}>
    <HeaderContainer>
      <Logo>
        <a href="/">Store</a>
      </Logo>
      <StyledHeaderNav />
      <SearchWrapper />
      <HeaderButtons />
    </HeaderContainer>
  </header>
);

const StyledHeader = styled(Header)`
  background-color: var(--standard-color);
`;

export { StyledHeader };
