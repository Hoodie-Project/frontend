import React, { useState } from 'react';
import { styled } from 'styled-components';
import MonthlyCalendar from '@/src/components/calendar/MonthlyCalendar';
import Copyright from '@/src/components/common/Copyright';
import SidebarWidget from './SidebarWidget';
import EventWidget from './EventWidget';
import PlanWidget from './PlanWidget';
import AffirmWidget from './AffirmWidget';

interface WidgetItem {
  id: string;
  content: React.ReactNode;
  size: string;
}

const widgetList = [
  { id: 'event', content: <EventWidget />, size: 'l' },
  { id: 'plan', content: <PlanWidget />, size: 'm' },
  { id: 'affirmation', content: <AffirmWidget />, size: 's' },
];

function Sidebar() {
  const [widgets, setWidgets] = useState<WidgetItem[]>(widgetList);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [draggedOverContainerId, setDraggedOverContainerId] = useState<string | null>(null);

  const handleDragStart = (id: string | null) => setDraggedItemId(id);
  const handleDragEntered = (id: string | null) => setDraggedOverContainerId(id);
  const handleDragLeave = () => setDraggedOverContainerId(null);

  const handleDrop = () => {
    if (!draggedOverContainerId) {
      clearState();
      return;
    }

    const fromIndex = widgets.findIndex(w => w.id === draggedItemId);
    const toIndex = widgets.findIndex(w => w.id === draggedOverContainerId);
    setWidgets(w => moveItem(w, fromIndex, toIndex));

    clearState();
  };

  const clearState = () => {
    setDraggedItemId(null);
    setDraggedOverContainerId(null);
  };

  return (
    <Layout>
      <MonthlyCalendar type='mini' />
      <SidebarContentContainer>
        {widgets.map(w => (
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
            {w.content}
          </SidebarWidget>
        ))}
      </SidebarContentContainer>
      <Copyright />
    </Layout>
  );
}

export default Sidebar;

export function moveItem(list: WidgetItem[], from: number, to: number) {
  const listClone = [...list];
  if (from < to) {
    listClone.splice(to + 1, 0, listClone[from]);
    listClone.splice(from, 1);
  } else if (to < from) {
    listClone.splice(to, 0, listClone[from]);
    listClone.splice(from + 1, 1);
  }
  return listClone;
}

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  height: calc(100% - 10.625rem);
`;
