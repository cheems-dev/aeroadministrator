import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  border-bottom: 1px solid ${palette.borderColor};
  margin-bottom: 72px;

  .SectionFor {
    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
      margin-top: 32px;
    }

    &__buttonContainer {
      display: flex;
      margin-left: 56px;
    }

    &__button {
      background-color: ${palette.palidBlueLight};
      border-radius: 8px;
      width: 196px;
      margin: 0 0 32px 32px;
    }

    &__textField {
      width: 100%;
    }

    &__container {
      margin-left: 96px;
      width: 88%;
      border-bottom: 0.2px solid ${palette.borderColorBlue};
      margin-bottom: 16px;
    }
  }
`;

export default Styles;
