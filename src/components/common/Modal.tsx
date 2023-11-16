import React, { ReactNode, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

function Modal({ children, isModalOpen, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <BackDrop ref={modalRef} onClick={onClickBackdrop}>
      <Layout>{children}</Layout>
    </BackDrop>
  );
}

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 9;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

const Layout = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 10;
  width: auto;
  height: auto;
  background-color: white;
  border-radius: 0.7rem;

  display: flex;
  flex-direction: column;
  justify-content: start;

  box-shadow: 0rem 0rem 0.7rem rgba(0, 0, 0, 0.3);
`;
