import React from 'react';
import styled from 'styled-components';

function AffirmWidget() {
  return <Layout>"15살의 나, 70살의 내가 봤을 때, 부끄럽지 않은 삶을 살자"</Layout>;
}

export default AffirmWidget;

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
