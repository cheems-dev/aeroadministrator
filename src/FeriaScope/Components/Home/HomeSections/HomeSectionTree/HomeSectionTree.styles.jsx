import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  padding: 160px 240px;

  @media screen and (min-width: ${hd}px) {
    padding: 160px 320px;
  }

  @media screen and (max-width: ${hd}px) {
    padding: 80px 240px;
  }

  @media screen and (max-width: ${desktop}px) {
    padding: 80px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 80px 32px;
  }
`;

export default Styles;
