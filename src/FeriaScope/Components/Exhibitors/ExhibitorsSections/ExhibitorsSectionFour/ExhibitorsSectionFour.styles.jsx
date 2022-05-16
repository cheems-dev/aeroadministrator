import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { desktop } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  margin: 160px 0;

  @media screen and (max-width: ${desktop}px) {
    margin: 40px 0;
  }
`;

export default Styles;
