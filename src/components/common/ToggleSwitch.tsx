import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ToggleSwitchProps {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelPlacement: 'end' | 'start' | 'top' | 'bottom' | undefined;
}

function ToggleSwitch({ checked, handleChange, label, labelPlacement }: ToggleSwitchProps) {
  return (
    <FormControlLabel
      value='allday'
      control={<Switch checked={checked} onChange={handleChange} color='primary' />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
}

export default ToggleSwitch;
