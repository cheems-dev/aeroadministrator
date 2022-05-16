import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  @media screen and (max-width: ${desktop}px) {
    display: contents;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    font-family: ${fonts["Nova-Lt"]};
    width: 380px;
    border-color: ${palette.borderColor};
    background-color: ${palette.white};
    border-radius: 8px;
    height: 56px;

    @media screen and (max-width: ${desktop}px) {
      width: auto;
      margin-bottom: 16px;
    }
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    display: none;
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${palette.grSecond2.c2};
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export default Styles;
