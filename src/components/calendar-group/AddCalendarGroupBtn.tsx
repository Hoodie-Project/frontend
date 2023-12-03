import React from 'react';
import { styled } from 'styled-components';

function AddCalendarGroupBtn() {
  return (
    <Layout>
      <AddBtn>Add Calendar Group</AddBtn>
    </Layout>
  );
}

export default AddCalendarGroupBtn;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const AddBtn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.4375rem;
  border-radius: 50px;
  background: #6f40ff;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  cursor: pointer;
`;
