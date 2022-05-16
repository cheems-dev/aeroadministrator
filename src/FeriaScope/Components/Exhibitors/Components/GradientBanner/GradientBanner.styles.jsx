import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients } = variables;

const Styles = styled.div`
  padding: 96px 120px;
  background: ${gradients.custom4};
  border-radius: 5px;

  @media screen and (max-width: ${desktop}px) {
    padding: 40px;
  }

  .container {
    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__card {
      display: flex;
      gap: 18px;

      @media screen and (max-width: ${desktop}px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
      }
    }
  }

  .title {
    &__content {
      font-family: ${fonts["Nova-Rg"]};
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;

      @media screen and (max-width: ${desktop}px) {
        text-align: center;
      }

      @media screen and (max-width: ${mobile}px) {
        font-weight: 560;
        font-size: 24px;
        line-height: 32px;
      }

      @media screen and (min-width: ${hd}px) {
        text-align: center;
      }
    }
  }

  .sub {
    &__title {
      font-family: ${fonts["Nova-Rg"]};
      font-style: italic;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .center {
    text-align: center;
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
      font-weight: 320;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .justify {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default Styles;
