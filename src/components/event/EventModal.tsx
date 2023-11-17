import React, { useState } from 'react';
import { useModalStore } from '@/src/zustand/modal';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@/src/components/common/Modal';
import { getIcons } from '@/src/assets/icons/getIcons';
import styled from 'styled-components';

function EventModal() {
  const [allDayChecked, setAllDayChecked] = useState(false);
  const { closeCreateEventModal, isCreateEventModalOpen } = useModalStore();
  const X = getIcons('X');

  const handleCloseBtn = () => {
    alert('이벤트 저장을 하지 않고 나가시겠습니까?');
    closeCreateEventModal();
  };

  const handleAllDayCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllDayChecked(event.target.checked);
  };

  return (
    <Modal type='createEvent' isModalOpen={isCreateEventModalOpen} closeModal={closeCreateEventModal}>
      <CloseBtn onClick={handleCloseBtn}>
        <X />
      </CloseBtn>

      <ModalHeader>Create Event</ModalHeader>
      <ModalBody>
        <Input type='text' placeholder='이벤트 명'></Input>
        <DatePickerBox>
          <Input type='date'></Input>
          <FormControlLabel
            value='allday'
            style={{ paddingBottom: '1rem' }}
            control={
              <Switch checked={allDayChecked} onChange={handleAllDayCheckedChange} defaultChecked color='secondary' />
            }
            label='하루 종일'
            labelPlacement='end'
          />
        </DatePickerBox>
        {allDayChecked && (
          <TimePickerBox>
            <TimePickerLabel>시작</TimePickerLabel>
            <Input type='time'></Input>
            <TimePickerLabel>종료</TimePickerLabel>
            <Input type='time'></Input>
          </TimePickerBox>
        )}
        <TimePickerLabel>메모</TimePickerLabel>
        <Input type='text'></Input>
      </ModalBody>
    </Modal>
  );
}

export default EventModal;

const CloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 3%;
  cursor: pointer;
`;

const Input = styled.input`
  height: 2rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const ModalBody = styled.div`
  width: 40rem;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const ModalHeader = styled.div`
  height: 3rem;
  width: 100%;
  border-radius: 0.7rem 0.7rem 0 0;
  background-color: #6f40ff;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DatePickerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimePickerBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimePickerLabel = styled.span`
  margin-right: 1rem;
`;
