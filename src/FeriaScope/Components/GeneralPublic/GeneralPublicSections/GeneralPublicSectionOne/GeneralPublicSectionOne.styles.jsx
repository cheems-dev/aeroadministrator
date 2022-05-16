import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, wide, hd } = CONSTANTS.BREAKPOINTS;
const { gradients, fonts, palette } = variables;

const Styles = styled.div`
  padding: 320px 0;

  .container {
    display: flex;
    align-items: center;
    gap: 120px;

    @media screen and (min-width: ${hd}px) {
      justify-content: center;
    }

    @media screen and (min-width: ${wide}px) {
      margin: auto;
    }

    &__content {
      max-width: 540px;

      @media screen and (max-width: ${hd}px) {
        max-width: none;
      }

      @media screen and (max-width: ${wide}px) {
        max-width: 540px;
      }

      @media screen and (max-width: ${desktop}px) {
        max-width: none;
      }
    }

    &__button {
      margin-top: 24px;
      display: flex;
      gap: 16px;

      @media screen and (max-width: ${desktop}px) {
        justify-content: center;
      }

      @media screen and (min-width: ${hd}px) {
        justify-content: center;
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
      font-weight: 640;
      line-height: 24px;
      text-align: center;
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 24px;
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

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
      text-justify: inter-word;
    }

    @media screen and (max-width: ${mobile}px) {
      padding-top: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .button {
    text-transform: capitalize;
    font-style: normal;
    line-height: 24px;
    font-family: ${fonts["Nova-Rg"]};

    &__register {
      width: 50%;
      padding: 8px 32px;
      color: ${palette.white};
      background-image: ${gradients.second1};
      border-radius: 4px;
      font-weight: 800;
      font-size: 16px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default Styles;
