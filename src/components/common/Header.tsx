import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { Menu, MenuItem } from '@mui/material';
import { getIcons } from '@/src/assets/icons/getIcons';
import { useSidebarLocationStore } from '@/src/zustand/layout';
import { useModalStore } from '@/src/zustand/modal';
import styled from 'styled-components';

function Header() {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const { toggleSidebarLocation } = useSidebarLocationStore();
  const { openModal } = useModalStore();

  const ProfileIcon = getIcons('EmptyProfile');
  const SettingIcon = getIcons('Setting');

  const MenuList = [
    {
      id: 'switch-sidebar',
      name: '사이드바 위치 변경(좌/우)',
      handleClick: () => {
        toggleSidebarLocation();
        handleClose();
      },
    },
    {
      id: 'add-delete-widget',
      name: '사이드바 위젯 추가/삭제',
      handleClick: () => {
        openModal();
        handleClose();
      },
    },
  ];

  const handleClickSetting = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
      <LeftWrappper>
        <Link href='/'>
          <Logo>HOODIE PLAN</Logo>
        </Link>
        <Nav />
      </LeftWrappper>
      <RightWrapper>
        <span>user1</span>
        <ProfileIcon />

        <SettingIcon
          id='sidebar-setting-button'
          aria-controls={open ? 'sidebar-setting-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickSetting}
        />
        <Menu
          id='sidebar-setting-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'sidebar-setting-button',
          }}
        >
          {MenuList.map(menu => (
            <MenuItem key={menu.id} onClick={menu.handleClick}>
              {menu.name}
            </MenuItem>
          ))}
        </Menu>
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
