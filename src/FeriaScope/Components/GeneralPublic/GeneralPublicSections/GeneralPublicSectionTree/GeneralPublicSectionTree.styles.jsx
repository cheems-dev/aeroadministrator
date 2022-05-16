import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, palette } = variables;

const Styles = styled.div`
  padding: 160px 0;
  border-top: 2px solid ${palette.gray.second3};
  border-bottom: 2px solid ${palette.gray.second3};

  @media screen and (max-width: ${desktop}px) {
    padding: 80px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
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
    margin-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

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

  .card {
    margin-top: 96px;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${desktop}px) {
      margin-top: 32px;
      flex-wrap: wrap;
      gap: 32px;
    }
  }
`;

export default Styles;
