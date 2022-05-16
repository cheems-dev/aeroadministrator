import styled from "styled-components";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  background: ${gradients.custom4};
  box-shadow: 0px 8px 62px ${palette.colorBoxShadow};
  background-blend-mode: darken;
  border-radius: 16px;
  padding: 32px 40px;
  justify-content: space-around;

  .container {
    &__image {
      display: flex;
    }

    &__content {
      align-items: center;
    }
  }

  .image {
    height: 180px;
    width: 180px;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  .sub {
    &__title {
      font-family: ${fonts["Nova-Rg"]};
      font-style: italic;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .button {
    background: ${(props) =>
      !props.isGradient ? palette.cardButtonColor : gradients.second1};
    color: ${palette.white};
    padding: 8px 64px;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      background: ${(props) =>
        !props.isGradient ? palette.cardButtonColor : gradients.second1};
      color: ${palette.white};
      transform: scale(1.05);
    }
  }

  .center {
    text-align: center;
  }

  .h1 {
    font-family: ${fonts["Nova-Rg"]};
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  }

  .justify {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export default Styles;
