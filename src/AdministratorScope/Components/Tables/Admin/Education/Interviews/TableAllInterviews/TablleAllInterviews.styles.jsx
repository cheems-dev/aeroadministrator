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

  .css-1ex1afd-MuiTableCell-root {
    border: none;
  }

  .chip {
    border-radius: 10px;
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
      font-family: ${fonts["Nova-Rg"]};
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
      padding: 8px 20px;
      white-space: nowrap;
      font-size: 12px;
      color: ${palette.white};
      font-family: ${fonts["Nova-Sb"]};
    }

    &__email {
      background-color: ${palette.palidBlueLight};
      border-radius: 4px;
      padding: 8px 20px;
      white-space: nowrap;
      font-size: 12px;
      text-transform: capitalize;
      color: ${palette.white};
      text-transform: capitalize;
      font-family: ${fonts["Nova-Sb"]};
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
