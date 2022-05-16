import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;
const { gradients, fonts } = variables;

const Styles = styled.div`
  padding: 320px 0;
  text-align: center;

  @media screen and (max-width: ${desktop}px) {
    padding: 160px 0;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 56px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      line-height: 40px;
    }
  }

  .paragraph {
    padding-top: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 42px;
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
    }
  }
`;

export default Styles;
