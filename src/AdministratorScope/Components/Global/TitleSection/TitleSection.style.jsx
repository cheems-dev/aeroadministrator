import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { mobile } = CONSTANTS.BREAKPOINTS;
const { fonts, palette, gradients } = variables;

const Styles = styled.div`
  padding-top: 80px;
  position: relative;
  display: flex;
  align-items: center;
  color: ${palette.grSecond2.c1};

  @media screen and (max-width: ${mobile}px) {
    padding-top: 32px;
  }

  .title {
    &__wrapper {
      margin-right: 10px;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      justify-content: center;
      display: inline-block;
    }

    &__icon {
      height: 16px;
      width: 16px;
    }

    &__content {
      display: flex;
      align-items: center;
      height: 24px;
      font-size: 20px;
      font-family: ${fonts["Nova-Eb"]};
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export default Styles;
