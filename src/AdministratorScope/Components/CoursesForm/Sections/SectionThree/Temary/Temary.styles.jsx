import styled from "styled-components";
import { variables } from "../../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  width: 88%;
  border: 0.2px solid ${palette.borderColorBlue};
  margin: 16px 0 16px 96px;
  padding: 0 16px;
  border-radius: 16px;

  .Temary {
    &__title {
      font-size: 18px;
      font-weight: 600;
      margin-top: 16px;
    }

    &__textField {
      width: 100%;
    }

    &__button {
      border-radius: 8px;
      width: 196px;
      border: 1px solid ${palette.borderColorBlue};
      margin: 16px 0 32px calc(100% - 196px);
    }

    &__section {
      border-bottom: 0.2px dashed ${palette.borderColorBlue};
    }
  }
`;

export default Styles;
