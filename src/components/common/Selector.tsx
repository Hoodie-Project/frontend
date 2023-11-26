import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// interface Calendar {
//   id: string;
//   value: string;
//   title: string;
//   color: string;
// }

interface SelectorProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  label: string;
  menuItemList: any[];
}

function Selector({ value, handleChange, label, menuItemList }: SelectorProps) {
  return (
    <FormControl sx={{ backgroundColor: 'white', '.MuiSelect-select': { backgroundColor: 'white' }, width: 205.5 }}>
      <Select
        variant='standard'
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ backgroundColor: 'white', '.MuiSelect-select': { backgroundColor: 'white' } }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
            },
          },
        }}
      >
        <MenuItem value=''>
          <em style={{ color: '#a2a2a2' }}>{label}</em>
        </MenuItem>
        {menuItemList.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
