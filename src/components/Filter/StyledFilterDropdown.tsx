/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { StyledDropdownMenu } from './StyledDropdownMenu';

const activeDropdownBtnStyles = css`
  color: #0770cf;
  border-top: 2px solid currentColor;
  box-shadow: 0 5px 13px -2px rgba(0, 0, 0, 0.8);
`;
const inactiveDropdownBtnStyles = css`
  color: inherit;
  border-top: 1px solid #ddd;
`;

const ToggleDropdownBtn = styled.button<{ active: boolean }>`
  width: 100%;
  height: 42px;
  padding: 0 5px;
  font-size: 1.6rem;
  text-align-last: left;
  border-bottom: 1px solid #ddd;
  ${({ active }) => (active ? activeDropdownBtnStyles : inactiveDropdownBtnStyles)}
`;
// TODO: Figure out why the React throws a warning here
const ArrowIcon = styled(FaAngleDown)<{ active: boolean }>`
  position: absolute;
  top: 50%;
  right: 5px;
  width: 13px;
  height: 13px;
  color: ${({ active }) => (active ? '#0770cf' : 'inherit')};
  transform: translateY(-50%) ${({ active }) => (active ? 'rotate(0.5turn)' : '')};
  cursor: pointer;
`;

export interface Props {
  btnText: string;
  listItems: {
    [item: string]: () => any;
  };
  className?: string;
}

const FilterDropdown: React.FC<Props> = ({ btnText, className, listItems }) => {
  const [isOpen, toggleOpen] = useState(false);

  const handleBtnClick = useCallback(() => toggleOpen((prevValue) => !prevValue), []);

  return (
    <div className={className}>
      <ToggleDropdownBtn
        type="button"
        active={isOpen}
        onClick={handleBtnClick}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {btnText}
      </ToggleDropdownBtn>
      <ArrowIcon active={isOpen} />
      <StyledDropdownMenu isOpen={isOpen} menuOptions={Object.entries(listItems)} />
    </div>
  );
};

const StyledFilterDropdown = styled(FilterDropdown)`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  min-width: 140px;
  max-width: 200px;
  color: #666;
  &:hover,
  &:focus {
    color: #0770cf;
  }
`;

export { StyledFilterDropdown };
