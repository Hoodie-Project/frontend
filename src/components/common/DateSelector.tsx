import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

interface DateSelectorProps {
  value: Dayjs | null;
  changeHandler: (newValue: Dayjs | null) => void;
}

function DateSelector({ value, changeHandler }: DateSelectorProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        slotProps={{ textField: { size: 'small', variant: 'standard' } }}
        value={value}
        onChange={changeHandler}
      />
    </LocalizationProvider>
  );
}

export default DateSelector;
