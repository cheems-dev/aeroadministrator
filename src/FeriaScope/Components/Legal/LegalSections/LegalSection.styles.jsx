import styled from "styled-components";
import { variables } from "../../../../AdministratorScope/config/variables";

const { fonts } = variables;

const Styles = styled.div`
  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  .containerText {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 52px;
  }

  .paragraph {
    font-family: ${fonts["Nova-Rg"]};
    line-height: 24px;
    text-align: justify;
    text-justify: inter-word;
  }

  .bold {
    display: inline;
    font-weight: bold;
  }

  .sub__paragraph {
    margin-top: 16px;
    font-family: ${fonts["Nova-Rg"]};
    line-height: 24px;
    text-align: justify;
    text-justify: inter-word;
  }

  .subtitle {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
  }

  .circle {
    list-style: circle inside;
  }

  .red {
    color: red;
  }
`;

export default Styles;
