import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";
import image from "../../../../../assets/img/Feria_Home.webp";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  width: 100%;
  height: 96vh;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: grayscale(1) brightness(24%);
    background-image: linear-gradient(
        0deg,
        rgba(11, 21, 45, 0.3) -8.78%,
        rgba(0, 2, 28, 0.3) 99.12%
      ),
      url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }

  .homeSection {
    &__content {
      z-index: 99;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      margin-left: 16%;
    }

    &__wrapper {
      display: flex;
      align-items: center;

      @media screen and (max-width: ${desktop}px) {
        width: auto;
      }
    }

    &__paragraph {
      margin-right: 96px;
      font-family: ${fonts["Nova-Lt"]};
      font-style: italic;
      font-weight: 600;
      font-size: 44px;
      line-height: 56px;
      color: ${palette.white};

      @media screen and (max-width: ${desktop}px) {
        margin-right: 0;
        text-align: center;
        text-justify: inter-word;
        font-weight: 600;
        line-height: 24px;
      }
    }

    &__gradient {
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__button {
      margin-top: 32px;
      width: 280px;
      background-image: linear-gradient(
        90deg,
        #005aff 0%,
        #0757ff 9.3%,
        #1950ff 22.53%,
        #3845ff 38.12%,
        #6335ff 55.5%,
        #9a20ff 74.37%,
        #db08ff 94.19%,
        #f000ff 100%
      );
    }
  }
`;

export default Styles;
