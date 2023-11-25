import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from 'styled-components';

interface CheckboxItem {
  value: string;
  label: string;
  checked: boolean;
}

interface CheckboxListProps {
  items: CheckboxItem[];
  label: string;
}

function CheckboxList({ items, label }: CheckboxListProps) {
  const [checkedItems, setCheckedItems] = useState(items.map(item => item.checked));

  const handleChangeParent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(checkedItems.map(() => event.target.checked));
  };

  const handleChangeChild = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = event.target.checked;
    setCheckedItems(newCheckedItems);
  };

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'row', margin: 0, padding: 0 }}>
      {items.map((item, index) => (
        <FormControlLabel
          sx={{ margin: 0, padding: 0 }}
          key={index}
          label={item.label}
          control={
            <Checkbox
              sx={{ margin: 0, padding: '4px' }}
              checked={checkedItems[index]}
              onChange={handleChangeChild(index)}
              size='small'
            />
          }
          labelPlacement='bottom'
        />
      ))}
    </Box>
  );

  return (
    <Layout>
      <FormControlLabel
        sx={{ margin: 0, padding: 0 }}
        label={label}
        control={
          <Checkbox
            sx={{ margin: 0, padding: '4px' }}
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={handleChangeParent}
            size='small'
          />
        }
        labelPlacement='bottom'
      />
      {children}
    </Layout>
  );
}

export default CheckboxList;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;
