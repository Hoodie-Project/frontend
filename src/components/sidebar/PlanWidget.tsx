import React from 'react';
import { styled } from 'styled-components';

function PlanWidget() {
  return <Layout>연단위, 주단위 플랜 내용</Layout>;
}

export default PlanWidget;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
