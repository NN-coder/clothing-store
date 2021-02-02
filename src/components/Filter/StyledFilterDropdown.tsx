/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback, useEffect, useRef } from 'react';
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

const ToggleDropdownBtn = styled.button<{ isActive: boolean }>`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 42px;
  padding: 0 5px;
  font-size: 1.6rem;
  text-align-last: left;
  border-bottom: 1px solid #ddd;
  ${({ isActive }) => (isActive ? activeDropdownBtnStyles : inactiveDropdownBtnStyles)}
`;
// TODO: Figure out why the React throws a warning here
const ArrowIcon = styled(FaAngleDown)<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  right: 5px;
  z-index: 5;
  width: 13px;
  height: 13px;
  color: ${({ isActive }) => (isActive ? '#0770cf' : 'inherit')};
  transform: translateY(-50%) ${({ isActive }) => (isActive ? 'rotate(0.5turn)' : '')};
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
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(({ target }: MouseEvent) => {
    if ((target as Element).closest('.filter-dropdown') !== ref.current) {
      toggleOpen(false);
    }
  }, []);

  const handleEscPress = useCallback(({ code }: KeyboardEvent) => {
    if (code === 'Escape') toggleOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keyup', handleEscPress);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keyup', handleEscPress);
    };
  }, [handleEscPress, handleOutsideClick]);

  const handleBtnClick = useCallback(() => toggleOpen((prevValue) => !prevValue), []);

  return (
    <div className={`filter-dropdown ${className}`} ref={ref}>
      <ToggleDropdownBtn
        type="button"
        isActive={isOpen}
        onClick={handleBtnClick}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {btnText}
      </ToggleDropdownBtn>
      <ArrowIcon isActive={isOpen} />
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
