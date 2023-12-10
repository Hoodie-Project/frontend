import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioboxGroupProps {
  label: string;
  radioOptions: RadioOption[];
  defaultValue?: string;
}

export default function RadioboxGroup({ label, radioOptions, defaultValue }: RadioboxGroupProps) {
  return (
    <FormControl>
      {label && <FormLabel id='demo-radio-buttons-group-label'>{label}</FormLabel>}
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue={defaultValue}
        name='radio-buttons-group'
      >
        {radioOptions.map(option => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
