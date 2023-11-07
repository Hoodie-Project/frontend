import React from 'react';
import styled from 'styled-components';

// Props의 타입을 정의합니다.
interface HeadProps {
  year: number;
  month: number;
  goToday: () => void;
  setMonth: (month: number) => void;
}

const Head: React.FC<HeadProps> = ({ year, month, goToday, setMonth }) => {
  return (
    <Layout>
      <Nav>
        <Year>
          {year}년 {month}월
        </Year>
        <BtnBox>
          <Btn onClick={() => setMonth(month - 1)}>&lt;</Btn>
          <Btn onClick={() => goToday()}>오늘</Btn>
          <Btn onClick={() => setMonth(month + 1)}>&gt;</Btn>
        </BtnBox>
      </Nav>
      <Days>
        {DAY.map((day, idx) => (
          <Day key={idx}>{day}</Day>
        ))}
      </Days>
    </Layout>
  );
};

const Layout = styled.section`
  display: flex;
  flex-direction: column;
`;
const Nav = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.7vw;
`;
const Year = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1vw 0 0;
  width: 6vw;
`;

const Btn = styled.li`
  padding: 0.2vw 0.2vw 0.1vw;
  width: 1.3vw;
  border-radius: 5px;
  text-align: center;
  font-size: 0.78rem;
  cursor: pointer;
`;

const Days = styled.div`
  display: flex;
`;

const Day = styled.li`
  width: calc(100% / 7);
  text-align: center;
  background-color: #e5e0ed;
  padding: 0.2vw;
  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
  }
`;

const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default Head;
