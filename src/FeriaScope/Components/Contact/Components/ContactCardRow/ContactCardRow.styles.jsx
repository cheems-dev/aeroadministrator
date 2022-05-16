import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  background: ${(props) =>
    props.isTransparent ? "transparent" : gradients.custom6};
  padding: 24px;
  border-radius: 8px;
  max-width: 520px;

  @media screen and (max-width: ${desktop}px) {
    background: ${gradients.custom6};
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    @media screen and (max-width: ${mobile}px) {
      justify-content: center;
      flex-direction: column;
    }

    &__button {
      margin-top: 16px;
      display: flex;
      gap: 16px;

      @media screen and (max-width: ${mobile}px) {
        flex-direction: column;
      }
    }
  }

  .image {
    max-width: 320px;
    position: relative;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-16px) scale(1.03);
    }

    &__container {
      position: absolute;
      bottom: 0;
      padding: 4px;
    }

    &__title {
      font-family: ${fonts["Nova-Rg"]};
      font-size: 24px;
      text-align: center;
      font-weight: 800;
      line-height: 32px;
    }

    &__paragraph {
      font-family: ${fonts["Nova-Rg"]};
      font-weight: 600;
      line-height: 24px;
      font-size: 16px;
      text-align: center;
      color: ${palette.neutro.second3};
    }

    &__img {
      max-width: 100%;
      width: 160px;
      height: 180px;
      background-blend-mode: darken;
      background-image: linear-gradient(
          357.86deg,
          ${palette.colorImageGray} 3.01%,
          ${palette.colorImageGrayTwo} 90.5%
        ),
        url(${(props) => props.src});
      background-size: cover;
      border-radius: 12px;
    }
  }

  .content {
    max-width: 320px;
  }

  .titleCard {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;

    @media screen and (max-width: ${mobile}px) {
      font-weight: 560;
      text-align: center;
    }
  }

  .paragraphCard {
    padding: 8px 0;
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    /* text-align: justify; */
    text-justify: inter-word;

    @media screen and (max-width: ${mobile}px) {
      text-align: center;
      font-weight: 320;
    }
  }

  .button {
    font-family: ${fonts["Nova-Lt"]};
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 18px;
    text-transform: capitalize;

    &__register {
      padding: 8px 32px;
      color: ${palette.white};
      background-color: ${palette.neutro.second3};
      border-radius: 4px;
      font-weight: 800;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__contact {
      font-weight: 600;
      transition: transform 0.3s;
      color: ${palette.neutro.second3};

      &:hover {
        transform: scale(1.05);
      }
    }

    &__language {
      font-family: ${fonts["Nova-Sb"]};
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 21px;
      color: ${palette.colorButtonCard};
      text-transform: capitalize;
      padding: 0;
      text-align: right;
    }
  }
`;

export default Styles;
