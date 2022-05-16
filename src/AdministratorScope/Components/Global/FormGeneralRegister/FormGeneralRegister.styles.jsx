import styled from "styled-components";
import { variables } from "../../../config/variables";

const { palette, gradients } = variables;

const Style = styled.div`
  .formTeacher {
    &__title {
      text-align: center;
      color: ${palette.white};
      font-size: 24px;
      margin: 40px 0;
    }

    &__TabsNavigation {
      transform: translateX(calc(50% - 106px));

      &__tab {
        background-image: ${gradients.second1};
        border: 1px solid ${palette.gray["second2"]};
        width: 64px;
        height: 64px;
        border-radius: 50%;
        min-width: 64px;
        color: ${palette.white};
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
        margin: 0 16px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &__field {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 48px;
        width: 100%;

        &__username {
          display: flex;
          justify-content: center;

          &--input {
            margin: 24px 0;
            padding: 0 20px;
            height: 48px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border: 1px solid ${palette.neutro.second8};
            width: 50%;
          }
          &--h2 {
            border-radius: 0 8px 8px 0;
            margin: 24px 0;
            padding: 8px 0;
            background-color: ${palette.palidGray};
            height: 48px;
            border: 1px solid ${palette.neutro.second8};
            width: 50%;
            text-align: center;
          }
        }
      }

      &__label {
        font-size: 24px;
        line-height: 32px;
        color: ${palette.white};
      }

      &__input {
        margin: 24px 0;
        padding: 0 24px;
        min-width: 408px;
        height: 48px;
        border-radius: 8px;
        border: 1px solid ${palette.neutro.second8};
      }
      &__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;

        &__button {
          width: 224px;
          color: ${palette.white};
          border: 1px solid ${palette.neutro.second8};
          margin-right: 8px;
          padding: 8px 16px;
          border-radius: 8px;
        }

        &--cancel {
          border: 1px solid ${palette.neutro.second8};
        }

        &--submit {
          background-color: ${palette.palidBlue};
          border: 1px solid ${palette.palidBlue};
        }
      }
    }
  }
`;

export default Style;
