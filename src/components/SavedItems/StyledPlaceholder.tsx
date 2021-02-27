import React from 'react';
import styled from 'styled-components/macro';
import { FaHeartBroken } from 'react-icons/fa';

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.8em;
`;
const Text = styled.p`
  font-size: 1.6em;
  line-height: 22px;
  letter-spacing: 0.025em;
`;

export interface Props {
  className?: string;
}

const Placeholder: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <FaHeartBroken size={30} />
    <Title>You have no saved items</Title>
    <Text>
      You haven&apos;t added anything to the list of saved items yet. Look through our catalog and
      choose something for yourself.
    </Text>
  </div>
);

const StyledPlaceholder = styled(Placeholder)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: center;
  justify-self: center;
  max-width: 300px;
  height: 300px;
  text-align: center;
  row-gap: 20px;
`;

export { StyledPlaceholder };
