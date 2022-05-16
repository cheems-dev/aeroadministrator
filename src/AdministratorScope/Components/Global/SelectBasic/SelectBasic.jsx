import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// Styles
import { variables } from '../../../config/variables';

export default function SelectBasic(props) {
  const { labels, handleGetFilter } = props;
  const { index, title } = props;
  const { color, fontColor } = props;
  const { palette } = variables;

  const [label, setLabel] = React.useState('');

  const handleChange = (event) => {
    handleGetFilter(event.target.value);
    setLabel(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 140,
        color: color,
        fontColor: fontColor,
        backgroundColor: palette.white,
        borderRadius: '8px',
      }}
    >
      <InputLabel id='demo-simple-select-label'>
        {title ? title : 'Ordenar Por'}
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={index ? labels[0].name : label}
        label={title ? title : 'Ordenar Por'}
        onChange={handleChange}
      >
        {labels.map(({ name, key }) => (
          <MenuItem
            value={key.length ? key : name}
            key={key.length ? key : name}
            classname='item'
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
