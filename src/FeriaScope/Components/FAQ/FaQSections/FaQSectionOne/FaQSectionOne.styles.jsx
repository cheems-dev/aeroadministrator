import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { mobile, desktop, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding: 160px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 96px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 120px;

    @media screen and (min-width: ${hd}px) {
      margin: auto;
    }

    &__content {
      max-width: 540px;

      @media screen and (min-width: ${hd}px) {
        max-width: none;
        margin: auto;
      }

      @media screen and (max-width: ${desktop}px) {
        max-width: none;
      }
    }
  }

  .title {
    font-size: 32px;
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      font-size: 32px;
      text-align: center;
      font-weight: 540;
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 24px;
    }
  }

  .paragraph {
    padding-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    width: 582px;

    @media screen and (min-width: ${hd}px) {
      width: auto;
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      width: auto;
      text-align: center;
      text-justify: inter-word;
      font-weight: 320;
    }
  }
`;

export default Styles;
