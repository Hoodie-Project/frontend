import React from 'react';
import { styled } from 'styled-components';

function EventWidget() {
  return (
    <Layout>
      이벤트 위젯 내용<button onClick={() => alert('눌린')}>clicktest</button>
    </Layout>
  );
}

export default EventWidget;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
