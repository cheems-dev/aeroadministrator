import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  border-bottom: 1px solid ${palette.borderColor};
  margin-bottom: 72px;

  .SectionThree {
    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
      margin-top: 32px;
    }

    &__button {
      background-color: ${palette.palidBlueLight};
      border-radius: 8px;
      width: 196px;
      margin-bottom: 32px;
    }

    &__warning {
      font-size: 16px;
      font-style: italic;
      line-height: 16px;
      color: ${palette.chipOrange};
      margin: -16px 0 32px 0;
    }

    &__button {
      background-color: ${palette.palidBlueLight};
      border-radius: 8px;
      width: 196px;
      margin: 0 0 32px 96px;
    }

    &__textField {
      width: 100%;
    }

    &__container {
      margin-left: 96px;
      width: 88%;
      border-bottom: 0.2px solid ${palette.borderColorBlue};
      margin-bottom: 16px;

      &__title {
        display: flex;
      }

      &__icon {
        align-self: flex-end;
        max-width: 240px;

        .SelectField {
          &__select {
            padding: 0;
            margin: 0 0 0 16px;
          }
        }
      }
    }
  }
`;

export default Styles;
