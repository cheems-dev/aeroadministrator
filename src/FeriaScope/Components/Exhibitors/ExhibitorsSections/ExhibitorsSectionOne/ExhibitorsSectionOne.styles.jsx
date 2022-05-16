import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding-top: 160px;

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      font-size: 24px;
      text-align: center;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .container {
    max-width: 640px;

    @media screen and (max-width: ${mobile}px) {
      max-width: none;
      margin-top: 40px;
    }

    &__image {
      max-width: 653px;

      @media screen and (max-width: ${mobile}px) {
        max-width: none;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: ${mobile}px) {
        flex-direction: column;
        justify-content: center;
      }

      @media screen and (min-width: ${hd}px) {
        justify-content: space-evenly;
      }

      @media screen and (max-width: ${hd}px) {
        justify-content: space-around;
      }
    }
  }

  .content {
    margin-top: 160px;

    @media screen and (max-width: ${mobile}px) {
      margin-top: 40px;
    }
  }

  .paragraph {
    margin-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      margin-top: 32px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      text-justify: inter-word;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .center {
    text-align: center;
  }
`;

export default Styles;
