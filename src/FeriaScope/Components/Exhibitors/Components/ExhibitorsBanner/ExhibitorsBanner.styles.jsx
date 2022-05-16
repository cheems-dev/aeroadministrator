import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { palette, gradients, fonts } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  color: ${palette.white};

  .banner {
    background: ${palette.inputColorBlue};
    background-blend-mode: darken;
    mix-blend-mode: normal;
    color: ${palette.white};
    padding: 80px 240px;

    @media screen and (max-width: ${desktop}px) {
      padding: 80px 40px;
    }

    @media screen and (max-width: ${mobile}px) {
      padding: 148px 24px;
    }

    @media screen and (min-width: ${hd}px) {
      padding: 80px 320px;
    }

    @media screen and (max-width: ${hd}px) {
      padding: 80px 240px;
    }
  }

  .container {
    width: 648px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: ${desktop}px) {
      width: auto;
    }

    @media screen and (min-width: ${hd}px) {
      margin: auto;
      width: auto;
    }

    &__button {
      display: flex;
      gap: 16px;

      @media screen and (max-width: ${mobile}px) {
        flex-direction: column;
        gap: 32px;
      }

      @media screen and (min-width: ${hd}px) {
        justify-content: center;
      }
    }
  }

  .title {
    &__content {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      font-family: ${fonts["Nova-Eb"]};
      background: ${gradients.custom3};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      @media screen and (max-width: ${mobile}px) {
        text-align: center;
        font-size: 32px;
      }

      @media screen and (min-width: ${hd}px) {
        text-align: center;
      }
    }
  }

  .paragraph {
    font-family: ${fonts["Nova-Rg"]};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      text-align: center;
      text-justify: inter-word;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .button {
    text-transform: capitalize;
    font-style: normal;
    line-height: 24px;
    font-family: ${fonts["Nova-Rg"]};

    &__register {
      padding: 8px 32px;
      color: ${palette.white};
      background-image: ${gradients.second1};
      border-radius: 4px;
      font-weight: 800;
      transition: transform 0.3s;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 25px;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__contact {
      color: ${palette.stateOk};
      font-weight: 600;
      transition: transform 0.3s;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default Styles;
