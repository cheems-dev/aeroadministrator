import styled from "styled-components";
import { CONSTANTS } from "../../../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../../../AdministratorScope/config/variables";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;
const { fonts, palette } = variables;

const Styles = styled.div`
  border-top: 2px solid ${palette.gray.second3};
  padding: 160px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 80px 0;
  }

  .titleNews {
    font-family: ${fonts["Nova-Sb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
    }

    @media screen and (max-width: ${mobile}px) {
      font-weight: 350;
      font-size: 24px;
      line-height: 32px;
    }
  }

  .news {
    padding-top: 96px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    @media screen and (max-width: ${mobile}px) {
      padding-top: 48px;
      gap: 16px;
    }
  }
`;

export default Styles;
