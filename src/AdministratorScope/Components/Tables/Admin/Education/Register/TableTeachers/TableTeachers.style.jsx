import styled from "styled-components";
import { CONSTANTS } from "../../../../../../config/constants";
import { variables } from "../../../../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts } = variables;

const Styles = styled.div`
  .tableComponent {
    border-radius: 8px;
  }

  .css-1ps6pg7-MuiPaper-root {
    background-color: transparent;
  }

  /* Button */
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    color: ${palette.white};
    background-color: ${palette.buttonColor};
    padding: 16px 32px 16px 32px;
    text-transform: capitalize;
    &:hover {
      color: ${palette.buttonColor};
      background-color: ${palette.white};
    }

    @media screen and (max-width: ${desktop}px) {
      margin: 16px 0;
    }
  }

  .icon {
    padding: 2px;
  }

  .chip {
    border-radius: 8px;
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;

    @media screen and (max-width: ${desktop}px) {
      justify-content: end;
      flex-direction: column-reverse;
      padding-bottom: 0;
    }

    &__text {
      color: ${palette.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;

      @media screen and (max-width: ${desktop}px) {
        display: none;
      }
    }
  }

  .containerTable {
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
    justify-content: space-between;
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
      clear: both;
      overflow: hidden;
      white-space: nowrap;
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
      border-radius: 2px;
      max-width: 128px;
      padding: 8px 48px;
      white-space: nowrap;
      font-size: 10px;
      color: ${palette.white};

      &__text {
        padding-top: 4px;
        font-size: 8px;
        line-height: 16px;
        font-weight: 700;
        font-family: ${fonts["Nova-Lt"]};
        text-align: center;
      }
    }

    &__body {
      &__user {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &__avatar {
          margin-right: 20px;
        }
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
