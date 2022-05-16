import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  border-bottom: 1px solid ${palette.borderColor};
  margin-bottom: 72px;

  .SectionOne {
    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
    }

    &__form {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__button {
      background-color: ${palette.palidBlueLight};
      border-radius: 8px;
      width: 196px;
      margin-bottom: 32px;
    }

    &__content {
      flex: 1;
    }
    &__imageField {
    }
  }
`;

export default Styles;
