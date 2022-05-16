import styled from "styled-components";
import { CONSTANTS } from "../../../../../config/constants";
import { variables } from "../../../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  color: ${palette.white};

  .button {
    display: flex;
    align-items: center;
    color: ${palette.palidBlue};
    padding: 16px 64px;
    border-radius: 8px;
    font-size: 16px;
    font-family: ${fonts["Nova-Eb"]};
    &__1 {
      background-color: ${palette.neutro.second9};
    }

    &__2 {
      background-color: ${palette.borderColor};
    }
  }

  .containerButtons {
    margin-top: 24px;
    margin-bottom: 32px;
    display: flex;
    justify-content: flex-end;
  }

  .title {
    margin-top: 32px;
    font-size: 30px;
    font-family: ${fonts["Nova-Eb"]};
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    margin-top: 16px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
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

  .form {
    margin-top: 40px;

    &__select {
      margin-top: 40px;
    }

    &__input {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }
  }

  .containerTable {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    @media screen and (max-width: ${desktop}px) {
      padding-bottom: 100px;
      margin-top: 16px;
    }
  }

  .textIcon {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .tableComponent {
    background-color: ${palette.palidBlue};
    height: 100%;

    &__text {
      color: ${palette.neutro.second2};
      font-size: 16px;
      line-height: 24px;
      font-weight: 800;
      font-family: ${fonts["Nova-Lt"]};
      text-align: center;
      white-space: nowrap;
      clear: both;
      overflow: hidden;
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
      background-color: ${palette.palidBlueLight};
      border-radius: 4px;
      max-width: 128px;
      padding: 4px 16px;
      color: ${palette.white};

      &::hover {
        border-radius: 2px;
      }

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
