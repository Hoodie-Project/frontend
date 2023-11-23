import React from 'react';
import styled from 'styled-components';
import Days from './Days';
import { getIcons } from '@/src/assets/icons/getIcons';
import { getMonthName } from '@/src/utils/calendar';

interface HeadProps {
  year: number;
  month: number;
  goToday: () => void;
  setMonth: (month: number) => void;
  type?: string;
}

function Head({ year, month, goToday, setMonth, type }: HeadProps) {
  const ArrowRight = getIcons('ArrowRight');
  const ArrowLeft = getIcons('ArrowLeft');
  const CalendarToday = getIcons('CalendarToday');
  const CalendarMonth = getIcons('CalendarMonth');

  return (
    <>
      {type === 'mini' && (
        <Layout>
          <MiniHeadSecion>
            <MiniSvgContainer>
              <ArrowLeft onClick={() => setMonth(month - 1)} />
            </MiniSvgContainer>
            <MiniSpan>
              {year} {getMonthName(month)}
            </MiniSpan>
            <MiniSvgContainer>
              <ArrowRight onClick={() => setMonth(month + 1)} />
            </MiniSvgContainer>
          </MiniHeadSecion>
          <Days type='mini' />
        </Layout>
      )}
      {type !== 'mini' && (
        <Layout>
          <HeadSection>
            <LeftSide>
              <TodayDiv onClick={() => goToday()}>
                <CalendarToday />
                <Span>Today</Span>
              </TodayDiv>
              <BtnBox>
                <SvgContainer>
                  <ArrowLeft onClick={() => setMonth(month - 1)} />
                </SvgContainer>
                <SvgContainer>
                  <ArrowRight onClick={() => setMonth(month + 1)} />
                </SvgContainer>
              </BtnBox>
              <YearMonth>
                <Span>
                  {year} {getMonthName(month)}
                </Span>
              </YearMonth>
            </LeftSide>
            <RightSide>
              <SwitchCalendarViewBtn>
                <CalendarMonth />
                {/* TODO 추후 zustand에 저장된 calendarview name 여기에 보여지게 */}
                <Span>Month</Span>
                <ArrowRight />
              </SwitchCalendarViewBtn>
              <AddEventButton>New Event</AddEventButton>
            </RightSide>
          </HeadSection>
          <Days />
        </Layout>
      )}
    </>
  );
}

const Layout = styled.section`
  display: flex;
  flex-direction: column;
`;

const MiniHeadSecion = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0.5rem;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: auto;
`;

const TodayDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  margin-right: 1.9375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  svg {
    margin-right: 1rem;
  }
  &:hover {
    background: #e5e0ed;
  }
  transition: background-color 0.3s;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.625rem;
`;

const MiniSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border-radius: 3.125rem;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
  }
  &:hover {
    background-color: #e5e0ed;
  }
  transition: background-color 0.3s;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3.125rem;
  margin-right: 1.9375rem;
  cursor: pointer;
  &:hover {
    background-color: #e5e0ed;
  }
  transition: background-color 0.3s;
`;

const YearMonth = styled.div`
  padding: 0.5rem 1rem;
`;

const MiniSpan = styled.span`
  color: #000;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.242px;
`;

const Span = styled.span`
  color: #4a4a4a;
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  line-height: 150%;
`;

const SwitchCalendarViewBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  margin-right: 1.9375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  svg:nth-of-type(1) {
    margin-right: 1rem;
  }

  svg:nth-of-type(2) {
    margin-left: 1rem;
    transform: rotate(90deg);
  }
  &:hover {
    background: #e5e0ed;
  }
  transition: background-color 0.3s;
`;

const AddEventButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: auto;
  border-radius: 50px;
  background: #6f40ff;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  line-height: 150%;
  cursor: pointer;
`;

export default Head;
