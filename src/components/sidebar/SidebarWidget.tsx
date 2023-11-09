import React from 'react';
import styled, { css } from 'styled-components';

interface SidebarWidgetProps {
  size: string;
  children: React.ReactNode;
  onDrop: (event: React.DragEvent) => void;
  onDragEnter: (event: React.DragEvent) => void;
  onDragLeave: (event: React.DragEvent) => void;
  isDraggedOver: boolean;
  onDragStart: (event: React.DragEvent, id: string) => void;
  id: string;
}

function SidebarWidget({
  size,
  children,
  onDrop,
  onDragEnter,
  onDragLeave,
  isDraggedOver,
  onDragStart,
  id,
}: SidebarWidgetProps) {
  return (
    <Layout
      $size={size}
      $isDraggedOver={isDraggedOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={e => e.preventDefault()}
      draggable
      onDragStart={e => onDragStart(e, id)}
    >
      {!isDraggedOver && children}
    </Layout>
  );
}

export default SidebarWidget;

const Layout = styled.div<{ $size: string; $isDraggedOver: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-top: 0.5rem;
  flex-grow: ${({ $size }) => ($size === 's' ? 1 : $size === 'm' ? 2 : 3)};

  ${props =>
    props.$isDraggedOver
      ? css`
          border: dashed 2px #e5e0ed;
          background: none;
        `
      : css`
          border: none;
          background: #e5e0ed;
        `}
`;
