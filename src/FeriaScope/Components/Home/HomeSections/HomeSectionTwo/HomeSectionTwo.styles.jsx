import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, palette } = variables;

const Styles = styled.div`
  .title {
    &__body {
      padding: 32px 0;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      font-family: ${fonts["Nova-Sb"]};

      @media screen and (max-width: ${desktop}px) {
        font-size: 16px;
        font-weight: 300;
        line-height: 16px;
        padding: 32px 16px;
      }

      @media screen and (max-width: ${mobile}px) {
        font-size: 12px;
        font-weight: 400;
        padding: 24px;
      }
    }
  }

  .card {
    padding: 80px 160px;
    background-color: ${palette.cardBodyColor};
    display: flex;
    justify-content: space-around;
    gap: 16px;

    @media screen and (min-width: ${hd}px) {
      padding: 80px 320px;
    }

    @media screen and (max-width: ${hd}px) {
      padding: 80px 240px;
    }

    @media screen and (max-width: ${desktop}px) {
      padding: 80px 40px;
    }

    @media screen and (max-width: ${mobile}px) {
      padding: 40px;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default Styles;
