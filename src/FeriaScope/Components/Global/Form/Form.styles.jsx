import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  padding: 96px 0;

  @media screen and (max-width: ${desktop}px) {
    padding: 40px 0;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
      font-size: 24px;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .paragraph {
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.32px;

    @media screen and (max-width: ${desktop}px) {
      text-align: center;
    }

    @media screen and (min-width: ${hd}px) {
      text-align: center;
    }
  }

  .form {
    margin-top: 24px;
  }

  .input {
    padding: 8px 0;
    width: 420px;

    @media screen and (max-width: ${desktop}px) {
      width: 460px;
    }

    @media screen and (max-width: ${mobile}px) {
      width: auto;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    @media screen and (max-width: ${hd}px) {
      justify-content: space-between;
    }

    @media screen and (min-width: ${hd}px) {
      justify-content: space-evenly;
    }

    @media screen and (max-width: ${desktop}px) {
      flex-direction: column;
      gap: 8px;
    }

    &__button {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      gap: 16px;

      @media screen and (max-width: ${mobile}px) {
        flex-direction: column;
      }
    }

    &__mobile {
      @media screen and (max-width: ${mobile}px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  .textField {
    font-family: ${fonts["Nova-Sb"]};
    border-radius: 8px;
    padding: 24px;
    color: ${palette.white};
    background-color: ${palette.inputColorBlue};

    @media screen and (max-width: ${mobile}px) {
      width: 216px;
    }

    &:focus {
      outline: none;
    }
  }

  .button {
    text-transform: capitalize;
    font-style: normal;
    line-height: 24px;
    font-family: ${fonts["Nova-Eb"]};

    &__register {
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 24px;
      padding: 8px 32px;
      color: ${palette.white};
      background-image: ${gradients.second1};
      border-radius: 4px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__contact {
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: r 25px;
      color: ${palette.stateOk};
      font-weight: 600;
      font-size: 16px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default Styles;
