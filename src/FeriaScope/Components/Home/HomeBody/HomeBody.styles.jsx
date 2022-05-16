import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { mobile } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  color: ${palette.white};

  @media screen and (min-width: ${mobile}px) {
    width: auto;
  }
`;

export default Styles;
