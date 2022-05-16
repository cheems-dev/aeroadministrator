import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { hd } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  @media screen and (min-width: ${hd}px) {
    width: 800px;
    margin: auto;
  }
`;

export default Styles;
