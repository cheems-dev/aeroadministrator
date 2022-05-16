import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { mobile, desktop, wide } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding: 160px 0;

  @media screen and (max-width: ${desktop}px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: ${wide}px) {
    display: flex;
    margin: auto;
    flex-direction: column;
  }

  .container {
    display: flex;
    gap: 24px;

    @media screen and (max-width: ${desktop}px) {
      display: wrapper;
      flex-direction: column-reverse;
    }

    @media screen and (max-width: ${wide}px) {
      justify-content: none;
      gap: 32px;
    }

    @media screen and (min-width: ${wide}px) {
      justify-content: center;
      margin: auto;
    }

    &__content {
      max-width: 500px;

      @media screen and (max-width: ${desktop}px) {
        max-width: none;
        width: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
      }

      &__title {
        max-width: 600px;

        @media screen and (max-width: ${desktop}px) {
          max-width: none;
          width: auto;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }

        @media screen and (min-width: ${wide}px) {
        }
      }
    }

    &__card {
      display: flex;
      gap: 24px;
      margin-bottom: 24px;

      @media screen and (max-width: ${desktop}px) {
        flex-direction: column-reverse;
      }
    }
  }

  .title {
    &__section {
      font-family: ${fonts["Nova-Eb"]};
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 48px;

      @media screen and (max-width: ${mobile}px) {
        font-weight: 560;
        line-height: 32px;
        text-align: center;
      }
    }

    &__sectionTwo {
      font-family: ${fonts["Nova-Eb"]};
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .paragraph {
    &__section {
      margin-top: 16px;
      font-family: ${fonts["Nova-Lt"]};
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      text-align: justify;
      text-justify: inter-word;

      @media screen and (max-width: ${mobile}px) {
        font-size: 16px;
        font-weight: 560;
        line-height: 24px;
      }
    }
  }

  .hidden {
    @media screen and (max-width: ${desktop}px) {
      display: none;
    }
  }

  .space {
    justify-content: space-around;
    gap: 140px;

    @media screen and (min-width: ${wide}px) {
      justify-content: space-evenly;
      gap: 48px;
    }
  }
`;

export default Styles;
