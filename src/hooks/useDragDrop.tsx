import { useState } from 'react';
import { moveItem } from '@/src/utils/moveItem';
import { useSidebarStore } from '@/src/zustand/layout';

const useDragDrop = () => {
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [draggedOverContainerId, setDraggedOverContainerId] = useState<string | null>(null);
  const { widgets, setWidgets } = useSidebarStore();

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
    setWidgets(moveItem(widgets, fromIndex, toIndex));

    clearState();
  };

  const clearState = () => {
    setDraggedItemId(null);
    setDraggedOverContainerId(null);
  };

  return {
    widgets,
    draggedOverContainerId,
    handleDragStart,
    handleDragEntered,
    handleDragLeave,
    handleDrop,
  };
};

export default useDragDrop;
