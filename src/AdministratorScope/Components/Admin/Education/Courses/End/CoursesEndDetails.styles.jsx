import styled from "styled-components";
import { CONSTANTS } from "../../../../../config/constants";
import { variables } from "../../../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients, fonts } = variables;

const Styles = styled.div`
  margin-bottom: 40px;

  @media screen and (max-width: ${desktop}px) {
    margin-bottom: 100px;
  }

  /* Remove color by default   */
  .css-1ps6pg7-MuiPaper-root {
    background-color: transparent;
    color: ${palette.white};
    box-shadow: none;
  }

  /* Personalizar MUI Button   */
  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    color: ${palette.white};
    text-transform: capitalize;
  }

  .wrapperButton {
    display: flex;
    justify-content: end;

    &__button {
      margin-top: 64px;
      color: ${palette.white};
      padding: 8px 48px;
      background-image: ${gradients.second3};
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 32px 0 32px 64px;

    @media screen and (max-width: ${desktop}px) {
      justify-content: end;
      flex-direction: column;
      padding-bottom: 0;
    }

    &__text {
      font-family: ${fonts["Nova-Eb"]};
      font-size: 20px;
      padding: 8px;
      margin-right: 56px;
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
    }
  }

  .chip {
    padding: 4px 16px;
    border-radius: 8px;
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
      max-width: 160px;
      padding: 0.48rem 0;

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
  }

  .containerData {
    background-color: ${palette.containerDetails};
    border-radius: 8px;
    color: ${palette.white};

    &__box {
      padding: 24px 56px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
    }

    &__title {
      font-family: ${fonts["Nova-Eb"]};
      font-size: 24px;
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${palette.grSecond2.c2};
    }

    &__code {
      margin-left: 40px;
    }

    .wrapperData {
      margin-top: 24px;

      &__line {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        -moz-column-rule-style: solid;
        -webkit-column-rule-style: solid;
        column-rule-style: solid;
        -moz-column-rule-color: ${palette.white};
        -webkit-column-rule-color: ${palette.white};
        column-rule-color: ${palette.white};
        -moz-column-rule-width: thick;
        -webkit-column-rule-width: thick;
        column-rule-width: thick;
        -moz-column-rule-width: 2px;
        -webkit-column-rule-width: 2px;
        column-rule-width: 2px;
      }
    }
  }
`;

export default Styles;
