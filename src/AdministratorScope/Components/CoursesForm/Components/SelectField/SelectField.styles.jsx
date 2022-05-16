import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => (props.widthContainer ? props.widthContainer : "88%")};
  margin: 32px 0;
  height: 48px;

  .SelectField {
    &__label {
      text-transform: uppercase;
      color: ${palette.white};
      font-size: 12px;
      font-weight: 16px;
      margin-right: 46px;
      width: 16%;
    }

    &__select {
      background-color: ${palette.palidBlue};
      padding: 0 16px;
      border-radius: 8px;
      border: 2px solid ${palette.palidBlueBorder};
      flex: 1;
      max-width: ${(props) => (props.width ? props.width : "100%")};
      height: ${(props) => (props.height ? props.height : "100%")};
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export default Styles;
