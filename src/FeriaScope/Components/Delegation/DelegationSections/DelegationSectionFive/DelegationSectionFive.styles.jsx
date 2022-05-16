import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, palette } = variables;

const Styles = styled.div`
  padding: 96px 0;
  border-top: 2px solid ${palette.gray.second3};
  border-bottom: 2px solid ${palette.gray.second3};

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    width: 640px;

    @media screen and (max-width: ${desktop}px) {
      width: auto;
      text-align: center;
      font-size: 24px;
    }

    @media screen and (max-width: ${mobile}px) {
      font-weight: 400;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
      width: auto;
    }
  }

  .banner {
    margin-top: 48px;

    @media screen and (max-width: ${mobile}px) {
      margin-top: 24px;
    }
  }
`;

export default Styles;
