import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Modal from '@/src/components/common/Modal';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSidebarStore } from '@/src/zustand/layout';
import { useModalStore } from '@/src/zustand/modal';

function SidebarSettingModal() {
  const { widgets, setWidgets } = useSidebarStore();
  const [checkedWidgets, setCheckedWidgets] = useState<string[]>([]);
  const { closeModal } = useModalStore();

  useEffect(() => {
    setCheckedWidgets(widgets.filter(widget => widget.isVisible).map(widget => widget.id));
  }, [widgets]);

  const handleCheckboxChange = (widgetId: string, isChecked: boolean) => {
    setCheckedWidgets(current => {
      if (isChecked) {
        return [...current, widgetId];
      } else {
        return current.filter(id => id !== widgetId);
      }
    });
  };

  const handleSave = () => {
    const updatedWidgets = widgets.map(widget => ({
      ...widget,
      isVisible: checkedWidgets.includes(widget.id),
    }));
    setWidgets(updatedWidgets);
    closeModal();
  };

  return (
    <Modal>
      <ModalHeader>위젯 추가/삭제</ModalHeader>
      <CheckBoxLayout>
        <FormGroup>
          {widgets.map(widget => (
            <FormControlLabel
              key={widget.id}
              control={
                <Checkbox
                  checked={checkedWidgets.includes(widget.id)}
                  onChange={e => handleCheckboxChange(widget.id, e.target.checked)}
                  sx={{
                    color: '#6F40FF',
                    '&.Mui-checked': {
                      color: '#6F40FF',
                    },
                  }}
                />
              }
              label={widget.label}
            />
          ))}
        </FormGroup>
      </CheckBoxLayout>
      <ButtonGroup>
        <Button $type='close' onClick={closeModal}>
          close
        </Button>
        <Button $type='save' onClick={handleSave}>
          save
        </Button>
      </ButtonGroup>
    </Modal>
  );
}

export default SidebarSettingModal;

const CheckBoxLayout = styled.div`
  width: 25rem;
  height: auto;
  padding: 1em;
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

const ButtonGroup = styled.div`
  width: 100%;
  height: 3rem;
  bottom: 0;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e5e0ed;
  justify-content: flex-end;
  padding: 0.5rem 0 0.5rem 0.5rem;
`;

const Button = styled.button<{ $type: string }>`
  margin-right: 0.5rem;
  width: 4rem;
  border: none;
  border-radius: 0.3rem;
  color: ${props => (props.$type === 'close' ? '#6F40FF' : 'white')};
  background-color: ${props => (props.$type === 'close' ? 'white' : '#6F40FF')};
  &:hover {
    color: ${props => (props.$type === 'close' ? '#6F40FF' : '#6F40FF')};
    background-color: ${props => (props.$type === 'close' ? '#E4CCFF' : '#E4CCFF')};
  }
`;
