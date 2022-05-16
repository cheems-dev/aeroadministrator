import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { BREAKPOINTS } = CONSTANTS;

const { fonts, palette } = variables;
const { tablet } = BREAKPOINTS;

const Style = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: ${(props) => (props.width ? props.width : "100%")};
    font-family: ${fonts["Nova-Sb"]};
    height: 32px;
    border-radius: 8px;
    padding: 24px;
    color: ${palette.white};
    background-color: ${palette.inputColorBlue};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${palette.neutro.second3};
    }

    @media screen and (max-width: ${tablet}px) {
      width: 100%;
    }
  }
`;

export default Style;
