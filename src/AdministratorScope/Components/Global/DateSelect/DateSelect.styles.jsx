import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { BREAKPOINTS } = CONSTANTS;
const { palette } = variables;
const { tablet } = BREAKPOINTS;

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 32px;

  .DateSelect {
    @media screen and (min-width: ${tablet}px) {
      width: 100%;
    }

    &__label {
      font-size: 16px;
      line-height: 24px;
      color: ${palette.white};
    }

    &__select {
      margin-left: 16px;
      background-color: ${palette.neon};
      border: 1.6px solid ${palette.neon2};
      height: 100%;
      width: 136px;
      text-align: center;
    }
  }
`;

export default Style;
