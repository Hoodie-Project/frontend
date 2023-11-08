import React, { ReactNode } from 'react';
import Header from './Header';
import { styled } from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  width: 100%;
  overflow: auto;
  height: calc(100% - 2.6rem);
  position: relative;
  background-color: #fdf7ff;
`;
