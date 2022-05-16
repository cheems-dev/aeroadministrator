import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { mobile, desktop, hd } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  color: ${palette.white};
  padding: 0 240px;

  @media screen and (min-width: ${hd}px) {
    padding: 0 320px 160px;
  }

  @media screen and (max-width: ${hd}px) {
    padding: 0 240px 80px;
  }

  @media screen and (max-width: ${desktop}px) {
    width: auto;
    padding: 0 80px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 0 32px;
  }
`;

export default Styles;
