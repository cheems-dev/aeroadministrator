import styled from "styled-components";
import { variables } from "../../../../config/variables";

const { palette } = variables;

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => (props.height ? props.height : "400px")};
  width: ${(props) => (props.width ? props.width : "24%")};
  background-color: ${palette.neutro["second4"]};
  border-radius: 16px;
  border: 2px solid ${palette.palidBlueBorder};
  color: transparent;

  .ImageField {
    &__input {
      /* visibility: hidden; */
      height: 100%;
      width: 100%;

      &::-webkit-file-upload-button {
        visibility: hidden;
      }

      &::before {
        content: "";
        cursor: pointer;
        display: inline-block;
        user-select: none;
        height: 100%;
        width: 100%;

        /* background: linear-gradient(top, #f9f9f9, #e3e3e3);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt; */
      }

      &:hover::before {
        border-color: black;
      }
      &:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
      }
    }
    &__text {
      position: absolute;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: ${palette.gray["second1"]};
      user-select: none;
    }
  }
`;

export default Styles;
