import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { desktop } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  margin-top: 56px;

  @media screen and (max-width: ${desktop}px) {
    margin-top: 0;
  }
`;

export default Styles;
