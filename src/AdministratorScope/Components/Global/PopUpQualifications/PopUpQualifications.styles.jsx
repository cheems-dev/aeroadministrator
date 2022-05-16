import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { palette, fonts, gradients } = variables;
const { desktop } = CONSTANTS.BREAKPOINTS;
const Style = styled.div`
  padding: 40px 80px;
  height: 80vh;
  overflow-y: scroll;

  .PopUpQualifications {
    &__flexContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__select {
      background-color: ${palette.white};
      color: ${palette.gray["second2"]};
      padding: 0 16px;
      border-radius: 8px;
      border: 2px solid ${palette.palidBlueBorder};
      flex: 1;
      max-width: 64%;
      height: 48px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
      text-align: left;
      font-family: ${fonts["Nova-Eb"]};
      text-transform: capitalize;
    }

    &__span {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: ${palette.white};
      padding: 8px 16px;
      border-radius: 8px;
      background: ${(props) => (props.approved ? palette.neon2 : palette.red)};
    }

    &__closeIcon {
      cursor: pointer;
      margin-left: 64px;
      width: 48px;
      height: 48px;
      color: ${palette.white};

      &:hover {
        transform: scale(1.05);
      }
    }

    &__title {
      color: ${palette.white};
      font-size: 32px;
      line-height: 32px;
      font-family: ${fonts["Nova-Eb"]};
      margin: 64px 0;
    }

    &__qualifications {
      color: ${palette.white};
      font-family: ${fonts["Nova-Eb"]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;

      &__cell {
        text-align: center;

        & > h1 {
          font-size: 48px;
        }

        & > h2 {
          font-size: 20px;
          font-family: ${fonts["Nova-Sb"]};
        }
      }

      &__customText {
        background: ${gradients.second1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${palette.grSecond2.c2};
      }
    }
  }

  .wrapper {
    margin-top: 64px;
    display: flex;

    &__info {
      color: ${palette.white};
      margin-left: 32px;
    }

    &__container {
      display: flex;
    }

    &__number {
      font-size: 24px;
      text: ${fonts["Nova-Eb"]};
    }

    &__text {
      margin-left: 20px;
      font-size: 16px;
      text: ${fonts["Nova-Lt"]};
      display: inline;
    }
  }

  .wrapperContainer {
    margin-top: 64px;
  }

  .separetor {
    margin-top: 16px;
  }

  .containerTable {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    @media screen and (max-width: ${desktop}px) {
      padding-bottom: 100px;
      margin-top: 16px;
    }
  }

  .css-1ex1afd-MuiTableCell-root {
    border: none;
  }

  .css-1ps6pg7-MuiPaper-root {
    background-color: transparent;
  }

  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    background-color: transparent;
  }

  .tableComponent {
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
      background-color: ${palette.colorDegradedTree};
      border: none;
      height: 80px;
      font-family: ${fonts["Nova-Eb"]};
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

  .bold {
    font-family: ${fonts["Nova-Eb"]};
  }

  .footer {
    margin-top: 32px;
    padding: 25px 0;
    border-top: 1px solid ${palette.neutro.second3};
    border-bottom: 1px solid ${palette.neutro.second3};
    font-size: 18px;

    &__title {
      font-size: 32px;
      font-family: ${fonts["Nova-Eb"]};
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__wrapper {
      display: flex;
      align-items: baseline;
    }

    &__paragraph {
      font-family: ${fonts["Nova-Sb"]};
      margin-top: 16px;
      color: ${palette.white};
    }

    &__chip {
      border-radius: 8px;
      padding: 8px 32px;
      margin: 0 8px;
    }
  }
`;

export default Style;
