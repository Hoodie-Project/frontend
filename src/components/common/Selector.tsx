import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import { styled } from 'styled-components';

interface Calendar {
  id: string;
  value: string;
  title: string;
  color: string;
}

interface SelectorProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  label: string;
  menuItemList: Calendar[];
}

function Selector({ value, handleChange, label, menuItemList }: SelectorProps) {
  return (
    <FormControl sx={{ minWidth: 205.5 }}>
      <Select
        variant='standard'
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ backgroundColor: 'white', '.MuiSelect-select': { backgroundColor: 'white' } }}
      >
        <MenuItem value=''>
          <em style={{ color: '#a2a2a2' }}>{label}</em>
        </MenuItem>
        {menuItemList.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
