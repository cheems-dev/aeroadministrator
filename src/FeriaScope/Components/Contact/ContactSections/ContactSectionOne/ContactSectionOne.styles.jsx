import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding: 346px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 160px 0;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 120px;

    @media screen and (min-width: ${hd}px) {
      justify-content: center;
      margin: auto;
    }

    &__content {
      max-width: 540px;

      @media screen and (max-width: ${desktop}px) {
        max-width: none;
      }

      @media screen and (min-width: ${hd}px) {
        max-width: none;
      }
    }
  }

  .title {
    font-size: 40px;
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      font-size: 32px;
      font-weight: 560;
      text-align: center;
    }
  }

  .paragraph {
    padding-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }
`;

export default Styles;
