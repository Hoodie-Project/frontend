import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Menu() {
  const menus = [
    { name: 'Calendars', href: '/calendars' },
    { name: 'Goals', href: '/goals' },
    { name: 'Diary', href: '/diary' },
    { name: 'Self-affirmations', href: '/self-affirmations' },
  ];

  return (
    <Layout>
      {menus.map(menu => {
        return (
          <Link key={menu.name} href={menu.href}>
            <MenuTitle>{menu.name}</MenuTitle>
          </Link>
        );
      })}
    </Layout>
  );
}

export default Menu;

const Layout = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2rem;
  a {
    margin-right: 0.5rem;
  }
`;

const MenuTitle = styled.div`
  width: auto;
  height: 2rem;
  padding: 0 0.6rem 0 0.6rem;
  border-radius: 3.125rem;
  color: #4a4a4a;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    background: #e4ccff;
    transition: background-color 0.3s;
  }
`;
