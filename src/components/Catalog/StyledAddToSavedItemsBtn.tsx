/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

export interface Props {
  handleClick: () => void;
  isAlreadyInSavedItemsList: boolean | undefined;
  className?: string;
}

const AddToSavedItemsBtn: React.FC<Props> = ({
  handleClick,
  className,
  isAlreadyInSavedItemsList,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = useCallback(() => setIsActive(true), []);
  const handleBlur = useCallback(() => setIsActive(false), []);

  const handlers = useMemo(
    (): React.DOMAttributes<HTMLButtonElement> => ({
      onClick: handleClick,
      onPointerEnter: handleFocus,
      onFocus: handleFocus,
      onPointerLeave: handleBlur,
      onBlur: handleBlur,
    }),
    [handleClick, handleFocus, handleBlur]
  );

  // TODO: Add animation on click
  return (
    <button type="button" className={className} {...handlers}>
      {isAlreadyInSavedItemsList || isActive ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
};

const StyledAddToSavedItemsBtn = styled(AddToSavedItemsBtn)`
  position: absolute;
  top: 360px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  cursor: default;
  &:hover,
  &:focus {
    box-shadow: 0 2px 4px 0 rgba(45, 45, 45, 0.14);
  }
  svg {
    margin-top: 5px;
  }
`;

export { StyledAddToSavedItemsBtn };
