import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, hd, wide } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

export const Styles = styled.div`
  padding: 160px 0;

  @media screen and (min-width: ${hd}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 140px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media screen and (max-width: ${desktop}px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 140px;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: none;
    }
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 240px;

    @media screen and (max-width: ${desktop}px) {
      font-weight: 560;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 160px;
    }

    @media screen and (min-width: ${wide}px) {
      margin-bottom: 240px;
    }

    @media screen and (min-width: ${hd}px) {
      margin-bottom: 160px;
    }
  }
`;
