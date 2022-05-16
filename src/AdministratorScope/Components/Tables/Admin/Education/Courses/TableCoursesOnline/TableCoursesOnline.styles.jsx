import styled from "styled-components";
import { CONSTANTS } from "../../../../../../config/constants";
import { variables } from "../../../../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  .tableComponent {
    border-radius: 8px;
  }

  .css-1ps6pg7-MuiPaper-root {
    background-color: transparent;
  }

  .css-1ex1afd-MuiTableCell-root {
    border: none;
  }

  .selectDate {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40%;

    @media screen and (max-width: ${desktop}px) {
      width: 100%;
      justify-content: flex-center;
      flex-direction: column;
      padding-bottom: 32px;
    }

    &__separator {
      @media screen and (max-width: ${desktop}px) {
        margin-bottom: 16px;
      }
    }
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
      flex-direction: column;
      padding-bottom: 0;
    }

    &__wrapper {
      color: ${palette.white};
      font-family: ${fonts["Nova-Eb"]};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      @media screen and (max-width: ${desktop}px) {
        justify-content: start;
      }
    }

    &__text {
      font-size: 20px;
      padding: 8px;
      margin-right: 56px;
      /* Text gradient */
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${palette.grSecond2.c2};
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }

      @media screen and (max-width: ${desktop}px) {
        font-size: 16px;
        padding-bottom: 32px;
        margin-right: 0;
        white-space: nowrap;
        clear: both;
        overflow: hidden;
      }

      &__true {
        background: ${gradients.second1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${palette.grSecond2.c2};
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
      border-radius: 4px;
      max-width: 128px;
      padding: 4px 16px;
      color: ${palette.white};

      &__text {
        padding-top: 4px;
        font-size: 12px;
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
