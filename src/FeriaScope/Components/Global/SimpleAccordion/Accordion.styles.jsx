import styled from "styled-components";
import { variables } from "../../../../AdministratorScope/config/variables";

const { palette, fonts } = variables;

const Styles = styled.div`
  margin: 32px 0;

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    background-color: ${palette.inputColorBlue};
    color: ${palette.white};
  }

  .question {
    font-family: ${fonts["Nova-Rg"]};
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    line-height: 29px;
  }

  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
    padding: 16px;
  }

  .answer {
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .css-yw020d-MuiAccordionSummary-expandIconWrapper {
    color: ${palette.white};
  }
`;

export default Styles;
