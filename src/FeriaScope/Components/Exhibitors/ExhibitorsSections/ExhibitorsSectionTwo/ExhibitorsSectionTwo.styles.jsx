import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  padding: 320px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 80px 0;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 40px 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-content: baseline;
    margin: auto;

    @media screen and (max-width: ${mobile}px) {
      justify-content: center;
      flex-direction: column;
      gap: 40px;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-around;
    }
  }
`;

export default Styles;
