import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const AuthBackGround = dynamic(() => import('@/src/components/auth/AuthBackGround'), { ssr: false });
const AuthLayout = dynamic(() => import('@/src/components/auth/AuthLayout'), { ssr: false });

function AuthContainer() {
  return (
    <Layout>
      <AuthLayout />
      <AuthBackGround />
    </Layout>
  );
}

export default AuthContainer;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
