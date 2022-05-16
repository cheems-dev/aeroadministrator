import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  padding: 96px 120px;
  background: ${gradients.custom4};
  border-radius: 8px;

  @media screen and (min-width: ${hd}px) {
    padding: 40px 240px;
  }

  @media screen and (max-width: ${hd}px) {
    padding: 40px 120px;
  }

  @media screen and (max-width: ${desktop}px) {
    padding: 40px 64px;
  }

  @media screen and (max-width: ${mobile}px) {
    padding: 32px 16px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${hd}px) {
      justify-content: space-evenly;
      margin: auto;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
      margin: auto;
    }

    @media screen and (max-width: ${desktop}px) {
      flex-direction: column-reverse;
      margin: auto;
    }

    &__two {
      display: flex;
      flex-direction: column;
      margin-top: 48px;

      @media screen and (max-width: ${desktop}px) {
        margin-top: 32px;
      }
    }

    &__buttons {
      padding-top: 32px;
      display: flex;
      justify-content: flex-end;
    }
  }

  .image {
    height: 180px;
    width: 180px;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    color: ${palette.cardBodyColor};
    font-size: 24px;
    padding: 8px 0;
    border-bottom: 1px solid ${palette.gray.second3};

    @media screen and (max-width: ${desktop}px) {
      border-bottom: none;
    }

    @media screen and (max-width: ${mobile}px) {
      font-family: ${fonts["Nova-Rg"]};
    }
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    margin: 8px 0;
    font-size: 16px;
    text-align: justify;

    @media screen and (max-width: ${desktop}px) {
      margin: 8px 40px;
      text-align: center;
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 16px;
      text-align: justify;
      text-justify: inter-word;
      margin: 16px 0;
    }
  }

  .input {
    font-family: ${fonts["Nova-Lt"]};
  }

  .paragraphTwo {
    font-family: ${fonts["Nova-Lt"]};
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: ${mobile}px) {
      font-size: 16px;
      margin: 16px 0;
    }
  }

  .button {
    background-color: ${palette.white};
    color: ${palette.textBlue};
    padding: 8px 32px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background-color: ${palette.white};
      color: ${palette.textBlue};
      transform: translateY(-4px);
    }

    &:disabled {
      background-color: ${palette.neutro.second6};
    }
  }
`;

export default Styles;
