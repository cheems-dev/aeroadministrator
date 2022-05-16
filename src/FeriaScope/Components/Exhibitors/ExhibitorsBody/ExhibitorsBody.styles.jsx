import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { mobile, desktop, hd } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  color: ${palette.white};
  padding: 0 240px 160px;

  @media screen and (min-width: ${hd}px) {
    padding: 0 320px 160px;
  }

  @media screen and (max-width: ${hd}px) {
    padding: 0 240px 80px;
  }

  @media screen and (max-width: ${desktop}px) {
    padding: 0 40px 80px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 0 24px 80px;
  }
`;

export default Styles;
