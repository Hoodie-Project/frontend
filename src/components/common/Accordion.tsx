import React, { ReactNode, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getIcons } from '@/src/assets/icons/getIcons';
import Checkbox from './Checkbox';
import { SidebarCalendar } from '@/src/models/calendar';

interface AccordionData {
  id: string;
  title: string;
  list: SidebarCalendar[];
}

interface AccordionProps {
  type?: string;
  data: AccordionData[];
  children?: ReactNode;
}

function Accordion({ type, data, children }: AccordionProps) {
  const [isToggleOpen, setIsToggleOpen] = useState<{ [key: string]: boolean }>(
    data.reduce((acc, item) => ({ ...acc, [item.id]: false }), {}),
  );
  const ArrowRight = getIcons('ArrowRight');

  const handleClickToggleTitle = (id: string) => {
    setIsToggleOpen(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {data.map(item => (
        <Layout key={item.id}>
          <ToggleTitleDiv onClick={() => handleClickToggleTitle(item.id)}>
            <ToggleIconSpan $istoggleopen={isToggleOpen[item.id]}>
              <ArrowRight />
              <ToggleTitle>{item.title}</ToggleTitle>
            </ToggleIconSpan>
            {type === 'calendarGroup' && <MenuDots />}
          </ToggleTitleDiv>
          {isToggleOpen[item.id] && (
            <ToggleContents>
              <Checkbox type='calendarGroup' data={item.list} />
              <div>{children}</div>
            </ToggleContents>
          )}
        </Layout>
      ))}
    </>
  );
}

export default Accordion;

const MenuDots = styled(getIcons('MenuDots'))`
  visibility: hidden;
  cursor: pointer;
`;

const rotateOpen = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const rotateClose = keyframes`
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Layout = styled.div`
  width: 100%;
  height: auto;
`;

const ToggleTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover ${MenuDots} {
    visibility: visible;
  }
`;

const ToggleIconSpan = styled.span<{ $istoggleopen: boolean }>`
  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.5rem;
    animation: ${props => (props.$istoggleopen ? rotateOpen : rotateClose)} 0.1s linear forwards;
  }
  display: inline-block;
`;

const ToggleTitle = styled.span`
  font-weight: bold;
  color: black;
`;

const ToggleContents = styled.div`
  padding-left: 1.375rem;
  font-weight: light;
`;
