import styled from "styled-components";
import { CONSTANTS } from "../../../../../config/constants";
import { variables } from "../../../../../config/variables";

const { mobile, desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  margin-top: 32px;
  color: ${palette.white};

  .css-1ps6pg7-MuiPaper-root {
    background-color: transparent;
  }

  .css-1ex1afd-MuiTableCell-root {
    border: none;
  }

  /* Button */
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    color: ${palette.white};
    background-color: ${palette.buttonColor};
    padding: 8px 16px;
    text-transform: capitalize;
    &:hover {
      color: ${palette.buttonColor};
      background-color: ${palette.white};
    }

    @media screen and (max-width: ${desktop}px) {
      margin: 16px 0;
    }
  }

  .containerButtons {
    margin-top: 24px;
    margin-bottom: 32px;
    display: flex;
    justify-content: flex-end;
    border-radius: 12px;

    @media screen and (max-width: ${mobile}px) {
      padding-bottom: 100px;
    }
  }

  .title {
    font-size: 30px;
    font-family: ${fonts["Nova-Eb"]};
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    margin-top: 16px;
  }

  .wrapper {
    margin-top: 40px;
    padding: 16px 0;
    &__subTitle {
      font-size: 24px;
      font-family: ${fonts["Nova-Eb"]};
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${palette.grSecond1.c2};
    }
    border-bottom: 4px solid ${palette.neutro.second3};
  }

  .containerTable {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;

    @media screen and (max-width: ${desktop}px) {
      padding-bottom: 100px;
      margin-top: 16px;
    }
  }

  .tableComponent {
    background-color: ${palette.palidBlue};
    height: 100%;
    border-radius: 8px;

    &__text {
      color: ${palette.neutro.second2};
      font-size: 16px;
      line-height: 24px;
      font-weight: 800;
      font-family: ${fonts["Nova-Lt"]};
      text-align: center;
    }

    &__text--secondary {
      font-weight: 400;
    }

    &__head {
      background-color: ${palette.palidBlueLight};
      height: 80px;
    }

    &__row {
      border: none;
    }

    &__button {
      border: 2px solid ${palette.palidBlueLight};
      border-radius: 4px;
      max-width: 128px;
      padding: 0.48rem 0;
      color: ${palette.white};
      text-transform: capitalize;

      &__text {
        padding-top: 4px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
        font-family: ${fonts["Nova-Lt"]};
        text-align: center;
      }
    }

    &__notFound {
      font-size: 18px;
      text-align: center;
      color: ${palette.white};
    }
  }
`;

export default Styles;
