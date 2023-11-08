import React from 'react';
import styled from 'styled-components';

function Copyright() {
  return <Layout>Copyright © 2023 Team Hoodie All rights reserved</Layout>;
}

export default Copyright;

const Layout = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 0.5rem 0.3125rem 0;
  color: #a5a5a5;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;
