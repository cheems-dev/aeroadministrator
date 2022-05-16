import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, wide, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding: 160px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 0 0 80px 0;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      font-weight: 560;
      text-align: center;
    }
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
      font-weight: 320;
    }
  }

  .container {
    &__component {
      display: flex;
      flex-direction: column;
      gap: 80px;

      @media screen and (max-width: ${desktop}px) {
        gap: 40px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 32px;

      @media screen and (max-width: ${desktop}px) {
        justify-content: space-around;
        gap: 40px;
      }

      @media screen and (min-width: ${wide}px) {
        justify-content: space-around;
        gap: 56px;
      }

      @media screen and (min-width: ${hd}px) {
        justify-content: center;
        gap: 72px;
      }
    }
  }
`;

export default Styles;
