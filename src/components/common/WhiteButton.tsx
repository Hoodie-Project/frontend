import React from 'react';
import { styled } from 'styled-components';
import { TSvgComponent } from 'svgComponent';

interface WhiteButtonProps {
  Icon?: TSvgComponent;
  children: React.ReactNode;
}

function WhiteButton({ Icon, children }: WhiteButtonProps) {
  return (
    <Layout>
      {Icon && <Icon />}
      <BtnName>{children}</BtnName>
    </Layout>
  );
}

export default WhiteButton;

const Layout = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  width: 285px;
  height: 52px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  border: none;
  outline: none;
  transition: all 0.1s ease-out;

  &:hover {
    border-radius: 50px;
    border: 1px solid #6f40ff;
    background: #fff;
    box-shadow: 0px 0px 3px 1px #6f40ff;
    span {
      color: #6f40ff;
    }
  }
`;

const BtnName = styled.span`
  color: #000;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 0.3125rem;
`;
