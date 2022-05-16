import styled from "styled-components";
import { CONSTANTS } from "../../../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../../../AdministratorScope/config/variables";

const { desktop, hd } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  .section {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${desktop}px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-around;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      width: 532px;

      @media screen and (max-width: ${desktop}px) {
        width: auto;
      }
    }

    &__paragraph {
      margin-right: 96px;
      font-family: ${fonts["Nova-Lt"]};
      font-style: italic;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.24px;
      color: ${palette.white};

      @media screen and (max-width: ${desktop}px) {
        margin-right: 0;
        text-align: center;
        text-justify: inter-word;
        font-weight: 600;
        line-height: 24px;
      }
    }

    &__gradient {
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .image {
    max-width: 480px;
    height: 384px;
    border: 24px;

    @media screen and (max-width: ${desktop}px) {
      max-width: 320px;
      height: 240px;
      padding: 18px;
    }
  }

  .sectionTwo {
    padding: 40px 0;
    display: flex;

    @media screen and (max-width: ${desktop}px) {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-around;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }
  }

  .sectionTree {
    padding-bottom: 160px;
    display: flex;
    flex-direction: row-reverse;
    @media screen and (max-width: ${desktop}px) {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-around;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }
  }
`;

export default Styles;
