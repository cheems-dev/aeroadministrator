import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  @media screen and (max-width: ${desktop}px) {
    padding: 80px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }
`;

export default Styles;
