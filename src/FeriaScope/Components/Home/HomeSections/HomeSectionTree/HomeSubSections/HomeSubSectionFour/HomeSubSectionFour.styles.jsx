import styled from "styled-components";
import { CONSTANTS } from "../../../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../../../AdministratorScope/config/variables";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  .title {
    text-align: center;
    padding-bottom: 96px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;

    &__two {
      padding: 96px 0;

      @media screen and (max-width: ${mobile}px) {
        padding: 48px 0;
      }
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;

    @media screen and (max-width: ${desktop}px) {
      justify-content: center;
    }

    @media screen and (max-width: ${mobile}px) {
      gap: 24px;
    }
  }

  .business {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    background-color: ${palette.white};
    border-radius: 40px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-16px) scale(1.03);
    }

    @media screen and (max-width: ${desktop}px) {
      justify-content: center;
    }
  }

  .containerButton {
    padding-top: 96px;
    display: flex;
    justify-content: center;
  }

  .button {
    padding: 8px 64px;
    color: ${palette.white};
    background-image: ${gradients.second1};
    border-radius: 4px;

    &:hover {
      transform: scale(1.05);
    }
  }

  .paragraph {
    padding-top: 160px;
    text-align: justify;
    text-justify: inter-word;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;

    @media screen and (max-width: ${desktop}px) {
      padding-top: 80px;
      font-size: 24px;
      line-height: 32px;
    }

    @media screen and (max-width: ${mobile}px) {
      padding-top: 80px;
      font-weight: 320;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export default Styles;
