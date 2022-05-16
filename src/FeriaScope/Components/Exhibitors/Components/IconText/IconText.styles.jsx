import styled from "styled-components";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { fonts } = variables;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 16px;

  .container__icon {
    display: flex;
    justify-content: center;
  }

  .center {
    text-align: center;
  }

  .paragraph {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;

    &__number {
      font-family: ${fonts["Nova-Eb"]};
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

export default Styles;
