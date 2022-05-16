import styled from "styled-components";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { palette } = variables;

const Styles = styled.div`
  background: ${palette.neutro.second2};

  .container {
    display: flex;
    justify-content: space-around;
    min-height: 100vh;

    &__children {
      margin-top: 120px;
      max-width: 1100px;
    }
  }
`;

export default Styles;
