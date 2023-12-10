import React from 'react';
import styled from 'styled-components';
import SocialButtonGroupBox from './SocialButtonGroupBox';

function AuthLayout() {
  return (
    <Layout>
      <ServiceName>HOODIE PLAN</ServiceName>
      <SocialButtonGroupBox />
    </Layout>
  );
}

export default AuthLayout;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServiceName = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  margin-bottom: 3.0625rem;
`;
