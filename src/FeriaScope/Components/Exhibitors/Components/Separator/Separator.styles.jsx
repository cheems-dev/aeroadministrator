import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, gradients } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  color: ${palette.white};
  padding-top: 160px;

  @media screen and (max-width: ${desktop}px) {
    padding-top: 80px;
  }
`;

export default Styles;
