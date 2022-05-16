import styled from "styled-components";

import { variables } from "../../../../../config/variables";

const { palette, fonts } = variables;

const Styles = styled.div`
  margin-top: 40px;

  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    background-color: transparent;
    box-shadow: none;
    width: auto;
    font-family: ${fonts["Nova-Lt"]};
  }

  .css-1ygcj2i-MuiTableCell-root {
    font-family: ${fonts["Nova-Lt"]};
    color: ${palette.white};
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    clear: both;
    overflow: hidden;
    white-space: nowrap;
  }

  .css-1ex1afd-MuiTableCell-root {
    font-family: ${fonts["Nova-Lt"]};
    color: ${palette.white};
    font-size: 16px;
  }

  .textCell {
    text-align: center;
    clear: both;
    overflow: hidden;
    white-space: nowrap;
  }

  .textSubCell {
    font-size: 14px;
    text-align: center;
    background: ${palette.backgroundSubCell};
    padding: 24px 0;
    background-clip: content-box, padding-box;
    color:white;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iconSeparator {
    margin: 8px;
  }

  .button {
    font-family: ${fonts["Nova-Lt"]};
    color: ${palette.white};
    padding: 8px 8px;
    border: 2px solid ${palette.palidBlueLight}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    border: 2px solid ${palette.palidBlueLight};
      border-radius: 4px;
      text-transform:capitalize;
  }

  .chip {
    padding: 4px 16px;
    border-radius: 8px;
  }
`;

export default Styles;
