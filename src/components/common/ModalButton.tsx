import React from 'react';
import { styled } from 'styled-components';

interface ModalButtonProps {
  type: string;
  name: string;
  handleClick?: () => void;
}

function ModalButton({ type, name, handleClick }: ModalButtonProps) {
  return (
    <ModalBtn $type={type} onClick={handleClick}>
      {name}
    </ModalBtn>
  );
}

export default ModalButton;

const ModalBtn = styled.button<{ $type: string }>`
  width: 4.375rem;
  height: 2.5rem;
  margin-left: 1rem;
  background-color: ${props => (props.$type === 'submit' ? '#6f40ff' : '')};
  font-weight: bold;
  color: ${props => (props.$type === 'submit' ? 'white' : '#6f40ff')};
  border-radius: 0.7rem;
`;
