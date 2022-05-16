import styled from "styled-components";
import { CONSTANTS } from "../../../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding-bottom: 96px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${desktop}px) {
    padding-top: 40px;
    padding-bottom: 80px;
    flex-direction: column;
  }

  @media screen and (max-width: ${hd}px) {
    justify-content: center;
    gap: 40px;
  }

  @media screen and (min-width: ${hd}px) {
    justify-content: space-evenly;
  }

  .paragraph {
    display: flex;
    align-items: center;
    width: 520px;

    @media screen and (max-width: ${desktop}px) {
      width: auto;
    }

    &__one {
      font-family: ${fonts["Nova-Rg"]};
      font-style: normal;
      font-weight: 720;
      font-size: 32px;
      line-height: 32px;

      @media screen and (max-width: ${desktop}px) {
        line-height: 32px;
        text-align: center;
      }

      @media screen and (max-width: ${mobile}px) {
        font-style: bold;
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__two {
      padding-top: 16px;
      font-family: ${fonts["Nova-Lt"]};
      font-style: normal;
      font-weight: 520;
      font-size: 24px;
      line-height: 32px;

      @media screen and (max-width: ${desktop}px) {
        font-style: normal;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        text-justify: inter-word;
      }

      @media screen and (max-width: ${mobile}px) {
        font-weight: 240;
        font-size: 16px;
        line-height: 16px;
        font-weight: 24px;
      }
    }
  }
`;

export default Styles;
