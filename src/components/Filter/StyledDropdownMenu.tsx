/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import shortid from 'shortid';
import styled, { css } from 'styled-components';

const DropdownMenuOption = styled.li`
  font-size: 1.6em;
  & + & {
    margin-top: 10px;
  }
`;

const SelectedBtnStyles = css`
  color: white;
  font-weight: 700;
  background-color: #0770cf;
`;
const UnselectedBtnStyles = css`
  color: #2d2d2d;
  background-color: white;
`;

const DropdownMenuBtn = styled.button<{ selected?: boolean }>`
  width: 100%;
  height: 45px;
  padding: 0 14px;
  color: #2d2d2d;
  text-align-last: left;
  background-color: white;
  border-radius: 5px;
  ${({ selected }) => (selected ? SelectedBtnStyles : UnselectedBtnStyles)}
  &:hover,
  &:focus {
    box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.09);
  }
`;

export interface Props {
  menuOptions: [string, () => any][];
  isOpen: boolean;
  className?: string;
}

const DropdownMenu: React.FC<Props> = ({ className, isOpen, menuOptions }) => {
  const listItemsKeys = useMemo(
    () => Array.from({ length: menuOptions.length }, () => shortid.generate()),
    [menuOptions.length]
  );

  if (!isOpen) return null;

  return (
    <ul className={className} role="listbox">
      {menuOptions.map(([text, handleClick], index) => (
        <DropdownMenuOption key={listItemsKeys[index]} role="option" aria-selected="false">
          <DropdownMenuBtn type="button" onClick={handleClick}>
            {text}
          </DropdownMenuBtn>
        </DropdownMenuOption>
      ))}
    </ul>
  );
};

const StyledDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  z-index: 5;
  width: 350px;
  padding: 10px;
  background-color: #eee;
  box-shadow: 0 5px 13px -2px rgba(0, 0, 0, 0.8);
`;

export { StyledDropdownMenu };
