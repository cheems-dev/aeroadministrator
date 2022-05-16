import styled from 'styled-components';
import { CONSTANTS } from '../../../config/constants';
import { variables } from '../../../config/variables';

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  @media screen and (max-width: ${desktop}px) {
    display: contents;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    color: ${(props) => (props.fontColor ? props.fontColor : palette.dark)};
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    height: 56px;
    width: ${(props) => (props.width ? 'auto' : '380px')};
    border-radius: 8px;
    font-family: ${fonts['Nova-Eb']};
    background-color: ${(props) => (props.color ? props.color : palette.white)};

    @media screen and (max-width: ${desktop}px) {
      width: auto;
    }
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    display: none;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .item {
    font-family: ${fonts['Nova-Eb']};
  }
`;

export default Styles;
