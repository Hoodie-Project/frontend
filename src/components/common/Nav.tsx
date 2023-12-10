import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Nav() {
  const navs = [
    { name: 'Calendars', href: '/calendars' },
    { name: 'Goals', href: '/goals' },
    { name: 'Diary', href: '/diary' },
    { name: 'Self-affirmations', href: '/self-affirmations' },
  ];

  return (
    <Layout>
      {navs.map(nav => {
        return (
          <Link key={nav.name} href={nav.href}>
            <NavTitle>{nav.name}</NavTitle>
          </Link>
        );
      })}
    </Layout>
  );
}

export default Nav;

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

const NavTitle = styled.div`
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
  }
  transition: background-color 0.3s;
`;
