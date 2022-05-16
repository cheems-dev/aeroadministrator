import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { mobile, hd, wide, tablet } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  padding: 240px 0;

  .container {
    &__section {
      display: flex;
      align-items: center;
      gap: 24px;

      @media screen and (max-width: ${wide}px) {
        flex-direction: column;
      }

      @media screen and (max-width: ${hd}px) {
        justify-content: space-around;
      }

      @media screen and (min-width: ${hd}px) {
        justify-content: space-evenly;
      }
    }

    &__text {
      max-width: 400px;

      @media screen and (max-width: ${wide}px) {
        width: auto;
        text-align: center;
      }
    }

    &__button {
      margin-top: 24px;
      display: flex;
      gap: 16px;

      @media screen and (max-width: ${wide}px) {
        justify-content: center;
      }

      @media screen and (max-width: ${mobile}px) {
        flex-direction: column;
      }
    }
  }

  .title {
    font-size: 24px;
    font-family: ${fonts["Nova-Eb"]};
    background: ${gradients.custom3};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      line-height: 24px;
    }
  }

  .paragraph {
    padding-top: 24px;
    font-family: ${fonts["Nova-Rg"]};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      font-size: 16px;
      font-weight: 560;
      line-height: 24px;
    }
  }

  .suParagraph {
    padding-top: 24px;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    @media screen and (max-width: ${mobile}px) {
      padding-top: 16px;
      font-weight: 400;
    }
  }

  .button {
    text-transform: capitalize;
    font-style: normal;
    line-height: 24px;
    font-family: ${fonts["Nova-Rg"]};

    &__register {
      padding: 8px 32px;
      color: ${palette.white};
      background-image: ${gradients.second1};
      border-radius: 4px;
      font-weight: 800;
      font-size: 16px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__contact {
      color: ${palette.stateOk};
      font-weight: 600;
      font-size: 16px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .card {
    display: flex;
    gap: 8px;

    @media screen and (max-width: ${tablet}px) {
      display: none;
    }
  }

  .image {
    border-radius: 16px;
    width: 124px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-16px) scale(1.03);
    }
  }
`;

export default Styles;
