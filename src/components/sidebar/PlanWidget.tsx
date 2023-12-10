import React from 'react';
import { styled } from 'styled-components';

function PlanWidget() {
  return <Layout>연단위, 주단위 플랜 내용</Layout>;
}

export default PlanWidget;

const Layout = styled.div`
  box-sizing: border-box;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  padding: 0.25rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e4ccff;
    border-radius: 50px;
  }

  scrollbar-color: #e4ccff;
  scrollbar-width: thin;
`;