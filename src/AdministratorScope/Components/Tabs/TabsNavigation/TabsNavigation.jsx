import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
// Variables
/* import { variables } from "../../../config/variables"; */
// Styles
import Styles from './TabsNavigation.style';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default function TabsNavigation(props) {
  const { labels, handleChange, value, className } = props;
  /* const { palette } = variables; */

  return (
    <Styles className={`TabsNavigation ${className}`}>
      <Box /* sx={{ borderBottom: 1, borderColor: palette.borderColor }} */>
        <Tabs
          variant='scrollable'
          scrollButtons='auto'
          onChange={handleChange}
          value={value}
        >
          {labels.map((label, index) => (
            <Tab
              className='TabsNavigation__tab'
              label={label}
              value={label}
              key={index}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
    </Styles>
  );
}
