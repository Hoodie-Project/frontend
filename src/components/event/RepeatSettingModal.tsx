import React, { useState } from 'react';
import CheckboxList from '@/src/components/common/CheckboxList';
import Modal from '@/src/components/common/Modal';
import { useModalStore } from '@/src/zustand/modal';
import { styled } from 'styled-components';
import ModalButton from '@/src/components/common/ModalButton';
import Selector from '@/src/components/common/Selector';
import DateSelector from '@/src/components/common/DateSelector';
import { Input, SelectChangeEvent } from '@mui/material';
import {
  repeatPeriodDropDown,
  oneToNumberDropDown,
  weeklySettingCheckList,
  weeklySettingDropDown,
  settingDropDown,
  endDropDown,
  returnContents,
} from '@/src/assets/data/repeatSettingModal';
import { Dayjs } from 'dayjs';

function RepeatSettingModal() {
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedStart, setSelectedStart] = useState<Dayjs | null>(null);
  const [selectedCycle, setSelectedCycle] = useState('');

  const [selectedSetting, setSelectedSetting] = useState('');
  const [dailySetting, setDailySetting] = useState('');

  const [weeklySetting, setWeeklySetting] = useState('');

  const [endDropDownSetting, setEndDropDownSetting] = useState('');
  const [selectedEnd, setSelectedEnd] = useState<Dayjs | null>(null);

  const { isRepeatSettingModalOpen, closeRepeatSettingModal } = useModalStore();

  const handleClickCancelBtn = () => {
    alert('반복 설정을 취소하시겠습니까?');
    closeRepeatSettingModal();
  };

  const handleClickSaveBtn = () => {
    alert('반복 설정을 저장하시겠습니까?');
    // TODO 추후 반복 설정 api POST 로직 추가
    closeRepeatSettingModal();
  };

  const findMatchingContent = (selectedPeriod: string) => {
    return returnContents.find(content => content.id === selectedPeriod);
  };

  const matchingContentByPeriod = findMatchingContent(selectedPeriod);

  return (
    <Modal type='repeatSetting' isModalOpen={isRepeatSettingModalOpen} closeModal={closeRepeatSettingModal}>
      <Layout>
        <ModalTitle>반복 설정</ModalTitle>
        <ModalBody>
          <InputBox>
            <InputLabel>반복</InputLabel>
            <Selector
              value={selectedPeriod}
              handleChange={(event: SelectChangeEvent) => {
                setSelectedPeriod(event.target.value);
              }}
              label='반복 설정'
              menuItemList={repeatPeriodDropDown}
            />
          </InputBox>
          <InputBox>
            <InputLabel>시작</InputLabel>
            <DateSelector
              value={selectedStart}
              changeHandler={(newValue: Dayjs | null) => {
                setSelectedStart(newValue);
              }}
            />
          </InputBox>

          {matchingContentByPeriod?.cycle && (
            <InputBox>
              <InputLabel>{matchingContentByPeriod?.cycle?.label}</InputLabel>
              <Selector
                value={selectedCycle}
                handleChange={(event: SelectChangeEvent) => {
                  setSelectedCycle(event.target.value);
                }}
                label='주기 설정'
                menuItemList={matchingContentByPeriod?.cycle?.content}
              />
              <div>
                {matchingContentByPeriod?.id === 'daily' ? (
                  <span>일</span>
                ) : matchingContentByPeriod?.id === 'weekly' ? (
                  <span>주</span>
                ) : matchingContentByPeriod?.id === 'monthly' ? (
                  <span>월</span>
                ) : matchingContentByPeriod?.id === 'yearly' ? (
                  <span>월</span>
                ) : (
                  ''
                )}
              </div>
            </InputBox>
          )}

          {matchingContentByPeriod?.setting && matchingContentByPeriod.id === 'weekly' && (
            <InputBox>
              <InputLabel>{matchingContentByPeriod?.setting?.label}</InputLabel>
              <CheckboxList items={weeklySettingCheckList} label='전체' />
            </InputBox>
          )}

          {matchingContentByPeriod?.setting &&
            (matchingContentByPeriod?.id === 'monthly' || matchingContentByPeriod?.id === 'yearly') && (
              <InputBox>
                <InputLabel>{matchingContentByPeriod?.setting?.label}</InputLabel>
                <FlexColumn>
                  <Selector
                    value={selectedSetting}
                    handleChange={(event: SelectChangeEvent) => {
                      setSelectedSetting(event.target.value);
                    }}
                    label='일단위/주단위'
                    menuItemList={settingDropDown}
                  />
                  {selectedSetting === 'dailySetting' && (
                    <Selector
                      value={dailySetting}
                      handleChange={(event: SelectChangeEvent) => {
                        setDailySetting(event.target.value);
                      }}
                      label='일단위'
                      menuItemList={oneToNumberDropDown(31)}
                    />
                  )}
                  {selectedSetting === 'weeklySetting' && (
                    <FlexColumn>
                      <Selector
                        value={weeklySetting}
                        handleChange={(event: SelectChangeEvent) => {
                          setWeeklySetting(event.target.value);
                        }}
                        label='몇째주'
                        menuItemList={weeklySettingDropDown}
                      />
                      <CheckboxList items={weeklySettingCheckList} label='전체' />
                    </FlexColumn>
                  )}
                </FlexColumn>
              </InputBox>
            )}

          <InputBox>
            <InputLabel>종료</InputLabel>
            <FlexColumn>
              <Selector
                value={endDropDownSetting}
                handleChange={(event: SelectChangeEvent) => {
                  setEndDropDownSetting(event.target.value);
                }}
                label='종료 설정'
                menuItemList={endDropDown}
              />
              {endDropDownSetting === 'datePick' && (
                <DateSelector
                  value={selectedEnd}
                  changeHandler={(newValue: Dayjs | null) => {
                    setSelectedEnd(newValue);
                  }}
                />
              )}
              {endDropDownSetting === 'times' && <Input type='text' placeholder='이후(횟수)' fullWidth />}
            </FlexColumn>
          </InputBox>
        </ModalBody>
        <ModalFooter>
          <ModalButton type='close' name='취소' handleClick={handleClickCancelBtn} />
          <ModalButton type='submit' name='저장' handleClick={handleClickSaveBtn} />
        </ModalFooter>
      </Layout>
    </Modal>
  );
}

export default RepeatSettingModal;

const Layout = styled.div`
  width: 23.25rem;
  height: auto;
  padding: 1rem;
`;

const ModalBody = styled.section`
  width: 100%;
  margin: 1rem 0rem;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  align-items: center;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const InputLabel = styled.div`
  font-size: 15px;
  color: #4a4a4a;
  margin-right: 1rem;
`;

const ModalTitle = styled.div`
  font-size: 20px;
`;

const ModalFooter = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
