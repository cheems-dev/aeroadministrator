import styled from "styled-components";
import { variables } from "../../../../AdministratorScope/config/variables";

const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  margin-top: 60px;
  width: 300px;

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 96px;
  }

  .paragraph {
    font-family: ${fonts["Nova-Rg"]};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 0;
  }

  .link {
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${palette.grSecond2.c2};
  }
`;

export default Styles;
