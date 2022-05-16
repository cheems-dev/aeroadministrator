import React from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Styles
import Styles from './Accordion.styles';

export default function SimpleAccordion(props) {
  const { ariaControls, id } = props;
  const { question, answer } = props;

  return (
    <Styles>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={ariaControls}
          id={id}
        >
          <div className='question'>{question}</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='answer'>{answer}</div>
        </AccordionDetails>
      </Accordion>
    </Styles>
  );
}
