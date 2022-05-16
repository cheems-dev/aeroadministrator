import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  color: ${palette.white};
  border-bottom: 1px solid ${palette.borderColor};
  margin-bottom: 72px;

  .SectionFive {
    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 800;
    }

    &__form {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 32px 0;
      padding: 0 32px;
    }

    &__button {
      background-color: ${palette.palidBlueLight};
      border-radius: 8px;
      width: 196px;
      margin-bottom: 32px;
      align-self: flex-end;
    }

    &__content {
      flex: 1;
    }
    &__imageField {
      margin: 0 32px 32px 32px;
      width: 424px;
      height: 224px;
    }
  }
`;

export default Styles;
