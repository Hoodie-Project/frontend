import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { TextField } from '@mui/material';

interface TimeSelectorProps {
  value: Dayjs | null;
  changeHandler: (newValue: Dayjs | null) => void;
}

function TimeSelector({ value, changeHandler }: TimeSelectorProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        slotProps={{ textField: { size: 'small', variant: 'standard' } }}
        value={value}
        onChange={changeHandler}
      />
    </LocalizationProvider>
  );
}

export default TimeSelector;
