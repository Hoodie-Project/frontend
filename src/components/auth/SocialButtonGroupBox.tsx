import React from 'react';
import GoogleAuthButton from './GoogleAuthButton';
import KakaoAuthButton from './KakaoAuthButton';
import styled from 'styled-components';

function SocialButtonGroupBox() {
  return (
    <Layout>
      <H1>Sign In</H1>
      <ButtonGroup>
        <GoogleAuthButton />
        <KakaoAuthButton />
      </ButtonGroup>
    </Layout>
  );
}

export default SocialButtonGroupBox;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26.9375rem;
  height: 22.5rem;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
`;

const H1 = styled.h1`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.88px;
  margin-top: 2.5625rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.0625rem;
  & > :nth-child(2) {
    margin-top: 1.6875rem;
  }
`;
