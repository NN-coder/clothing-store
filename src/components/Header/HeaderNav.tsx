import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: 0.2s;
  &.active,
  &:hover,
  &:focus {
    background-color: #525050;
  }
`;

export interface Props {
  className?: string;
}

const HeaderNav = styled(({ className }: Props) => (
  <nav className={className}>
    <NavigationLink to="/men">Men</NavigationLink>
    <NavigationLink to="/women">Women</NavigationLink>
  </nav>
))`
  display: flex;
  height: 100%;
`;

export { HeaderNav };
