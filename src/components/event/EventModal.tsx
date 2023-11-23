import React, { useState } from 'react';

import Modal from '@/src/components/common/Modal';
import DateSelector from '@/src/components/common/DateSelector';
import TimeSelector from '@/src/components/common/TimeSelector';
import ToggleSwitch from '@/src/components/common/ToggleSwitch';
import RepeatSettings from '@/src/components/event/RepeatSettings';
import Selector from '../common/Selector';

import { Input, SelectChangeEvent } from '@mui/material';

import { getIcons } from '@/src/assets/icons/getIcons';
import { useModalStore } from '@/src/zustand/modal';
import { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { calendarList } from './calendarList';

function EventModal() {
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [allDayChecked, setAllDayChecked] = useState(true);
  const [repeatChecked, setRepeatChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null);
  const { closeCreateEventModal, isCreateEventModalOpen } = useModalStore();

  const X = getIcons('X');
  const Clock = getIcons('Clock');
  const DoubleQuote = getIcons('DoubleQuote');
  const Refresh = getIcons('Refresh');
  const Memo = getIcons('Memo');

  const handleCloseBtn = () => {
    alert('이벤트 저장을 하지 않고 나가시겠습니까?');
    closeCreateEventModal();
  };

  function getSelectedCalendarColor(selectedValue: string): string {
    const selectedCalendar = calendarList.find(calendar => calendar.value === selectedValue);
    return selectedCalendar ? selectedCalendar.color : 'defaultColor'; // 선택되지 않은 경우 기본 색상
  }

  return (
    <Modal type='createEvent' isModalOpen={isCreateEventModalOpen} closeModal={closeCreateEventModal}>
      <CloseBtn onClick={handleCloseBtn}>
        <X />
      </CloseBtn>
      <ModalHeader>Create Event</ModalHeader>
      <ModalBody>
        <InputBox>
          <CalendarColor $selectedCalendar={selectedCalendar} $color={getSelectedCalendarColor(selectedCalendar)} />
          <Selector
            value={selectedCalendar}
            handleChange={(event: SelectChangeEvent) => {
              setSelectedCalendar(event.target.value);
            }}
            label='캘린더'
            menuItemList={calendarList}
          />
        </InputBox>
        <InputBox>
          <DoubleQuote />
          <Input type='text' placeholder='이벤트 명' fullWidth />
        </InputBox>
        <SelectDateBox>
          <Clock />
          <DatePickerBox>
            <DateSelector
              value={selectedDate}
              changeHandler={(newValue: Dayjs | null) => {
                setSelectedDate(newValue);
              }}
            />
          </DatePickerBox>
          <ToggleSwitch
            checked={allDayChecked}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAllDayChecked(event.target.checked);
            }}
            label='하루 종일'
            labelPlacement='end'
          />
        </SelectDateBox>
        {!allDayChecked && (
          <SelectTimeBox>
            <TimePickerLabel>시작</TimePickerLabel>
            <TimeSelector
              value={selectedStartTime}
              changeHandler={(newValue: Dayjs | null) => {
                setSelectedStartTime(newValue);
              }}
            />
            <TimePickerLabel type='end'>종료</TimePickerLabel>
            <TimeSelector
              value={selectedEndTime}
              changeHandler={(newValue: Dayjs | null) => {
                setSelectedEndTime(newValue);
              }}
            />
          </SelectTimeBox>
        )}
        <InputBox>
          <Refresh />
          <ToggleSwitch
            checked={repeatChecked}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRepeatChecked(event.target.checked);
            }}
            label='반복 안 함'
            labelPlacement='end'
          />
        </InputBox>
        {!repeatChecked && (
          <RepeatSettingBox>
            <RepeatSettings />
          </RepeatSettingBox>
        )}
        <InputBox>
          <Memo />
          <Input type='text' placeholder='메모' fullWidth />
        </InputBox>
      </ModalBody>
      <ModalFooter>
        <ModalFooterBtn type='close' onClick={handleCloseBtn}>
          취소
        </ModalFooterBtn>
        <ModalFooterBtn type='submit'>저장</ModalFooterBtn>
      </ModalFooter>
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

const CalendarColor = styled.div<{ $selectedCalendar?: string; $color?: string }>`
  width: 24px;
  height: 24px;
  background-color: ${props => (props.$selectedCalendar === '' ? 'white' : `${props.$color}`)};
  border: 2px solid ${props => (props.$selectedCalendar === '' ? '#6f40ff' : `${props.$color}`)};
  border-radius: 50%;
  margin-right: 1rem;
`;

const SelectDateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    margin-right: 1rem;
  }
`;

const SelectTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  align-items: center;
`;

const ModalBody = styled.section`
  width: 35rem;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.section`
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

const ModalFooter = styled.section`
  width: 35rem;
  height: auto;
  padding: 0rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DatePickerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
`;

const TimePickerLabel = styled.span<{ type?: string }>`
  width: 2rem;
  margin-right: 0.5rem;
  margin-left: ${props => (props.type === 'end' ? '1rem' : '')};
`;

const InputBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    margin-right: 1rem;
  }
`;

const ModalFooterBtn = styled.button<{ type: string }>`
  width: 4.375rem;
  height: 2.5rem;
  margin-left: 1rem;
  background-color: ${props => (props.type === 'submit' ? '#6f40ff' : '')};
  font-weight: bold;
  color: ${props => (props.type === 'submit' ? 'white' : '#6f40ff')};
  border-radius: 0.7rem;
`;

const RepeatSettingBox = styled.section`
  margin-bottom: 1rem;
  margin-left: 2.5rem;
`;
