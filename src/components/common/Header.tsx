import React from 'react';
import Link from 'next/link';
import Menu from './Menu';
import { getIcons } from '@/src/assets/icons/getIcons';
import styled from 'styled-components';

function Header() {
  const ProfileIcon = getIcons('EmptyProfile');
  const SettingIcon = getIcons('Setting');

  return (
    <Layout>
      <LeftWrappper>
        <Link href='/'>
          <Logo>HOODIE PLAN</Logo>
        </Link>
        <Menu />
      </LeftWrappper>
      <RightWrapper>
        <span>user1</span>
        <ProfileIcon />
        <SettingIcon />
      </RightWrapper>
    </Layout>
  );
}

export default Header;

const Layout = styled.div`
  width: 100%;
  height: 2.6rem;
  padding: 0 1rem 0 1rem;
  background-color: #e5e0ed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
`;

const Logo = styled.span`
  height: 100%;
  color: #4a4a4a;
  font-weight: bolder;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const LeftWrappper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    margin-right: 0.5rem;
    color: #4a4a4a;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`;
