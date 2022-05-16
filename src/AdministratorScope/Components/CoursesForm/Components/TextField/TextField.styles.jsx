import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 88%;
  margin: 32px 0;
  height: ${(props) => (props.height ? props.height : "48px")};

  .TextField {
    &__label {
      text-transform: uppercase;
      color: ${palette.white};
      font-size: 12px;
      font-weight: 16px;
      margin-right: 46px;
      width: 16%;
      display: ${(props) => (props.hideLabel ? "none" : "")};
    }

    &__input {
      background-color: ${palette.palidBlue};
      padding: 8px 16px;
      border-radius: 8px;
      border: 2px solid ${palette.palidBlueBorder};
      flex: 1;
      max-width: ${(props) => (props.width ? props.width : "100%")};
      height: 100%;
    }
  }
`;

export default Styles;
