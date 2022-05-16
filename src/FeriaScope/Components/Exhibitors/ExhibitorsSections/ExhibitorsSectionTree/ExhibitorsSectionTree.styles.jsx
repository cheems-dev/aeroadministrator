import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients } = variables;

const Styles = styled.div`
  padding: 80px 0;

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }

  .container {
    &__text {
      max-width: 540px;

      @media screen and (max-width: ${desktop}px) {
        max-width: none;
        text-align: center;
      }

      @media screen and (min-width: ${hd}px) {
        max-width: none;
        text-align: center;
      }
    }
  }

  .title {
    font-size: 24px;
    font-family: ${fonts["Nova-Eb"]};
    background: ${gradients.custom3};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      text-align: center;
      text-align: center;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .paragraph {
    padding-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    line-height: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 36px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      text-justify: inter-word;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .card {
    margin-top: 96px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${desktop}px) {
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
    }

    @media screen and (max-width: ${mobile}px) {
      margin-top: 32px;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-around;
    }
  }
`;

export default Styles;
