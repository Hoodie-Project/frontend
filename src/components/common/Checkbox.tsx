import React from 'react';
import styled from 'styled-components';

interface Checkbox {
  id: string;
  title: string;
  color?: string;
}

interface CheckboxProps {
  data: Checkbox[];
}

function Checkbox({ data }: CheckboxProps) {
  return (
    <Layout>
      {data?.map(item => (
        <InputLabel key={item.id} htmlFor={item.id}>
          <RoundInput type='checkbox' $color={item.color} id={item.id} name={item.title} />
          <StyledP>{item.title}</StyledP>
        </InputLabel>
      ))}
    </Layout>
  );
}

export default Checkbox;

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const RoundInput = styled.input<{ $color?: string }>`
  appearance: none;
  border: 1px solid #a5a5a5;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.3rem 0rem;

  &:checked {
    border: ${props => props.$color && `1px solid ${props.$color}`};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${props => props.$color && `${props.$color}`};
  }
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.5rem;
`;
