import React from 'react';
import { styled } from 'styled-components';
import MonthlyCalendar from '@/src/components/calendar/MonthlyCalendar';
import Copyright from '@/src/components/common/Copyright';
import SidebarWidget from './SidebarWidget';
import useDragDrop from '@/src/hooks/useDragDrop';
import EventWidget from './EventWidget';
import PlanWidget from './PlanWidget';
import AffirmWidget from './AffirmWidget';

function Sidebar() {
  const { widgets, draggedOverContainerId, handleDragStart, handleDragEntered, handleDragLeave, handleDrop } =
    useDragDrop();

  return (
    <Layout>
      <MonthlyCalendar type='mini' />
      <SidebarContentContainer>
        {widgets.map(w => {
          if (w.isVisible) {
            let WidgetComponent;
            switch (w.type) {
              case 'EventWidget':
                WidgetComponent = EventWidget;
                break;
              case 'PlanWidget':
                WidgetComponent = PlanWidget;
                break;
              case 'AffirmWidget':
                WidgetComponent = AffirmWidget;
                break;
              default:
                return null;
            }
            return (
              <SidebarWidget
                key={w.id}
                size={w.size}
                onDrop={handleDrop}
                onDragEnter={() => handleDragEntered(w.id)}
                onDragLeave={handleDragLeave}
                isDraggedOver={w.id === draggedOverContainerId}
                onDragStart={() => handleDragStart(w.id)}
                id={w.id}
              >
                <WidgetComponent />
              </SidebarWidget>
            );
          }
        })}
      </SidebarContentContainer>
      <Copyright />
    </Layout>
  );
}

export default Sidebar;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 1rem;
  height: calc(100% - 10.625rem);
`;
