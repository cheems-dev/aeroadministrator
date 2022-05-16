import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  padding: 240px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${hd}px) {
    justify-content: space-around;
  }

  @media screen and (min-width: ${hd}px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: ${desktop}px) {
    padding: 172px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    flex-direction: column;
  }

  .container {
    max-width: 640px;

    @media screen and (max-width: ${mobile}px) {
      max-width: none;
    }
  }

  .containerImage {
    max-width: 653px;

    @media screen and (max-width: ${mobile}px) {
      margin-top: 40px;
      max-width: none;
    }
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 400;
      text-align: center;
    }
  }

  .content {
    margin-top: 160px;

    @media screen and (max-width: ${mobile}px) {
      margin-top: 80px;
    }
  }

  .paragraph {
    margin-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    @media screen and (max-width: ${mobile}px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: justify;
      text-justify: inter-word;
    }
  }
`;

export default Styles;
