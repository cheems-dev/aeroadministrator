import styled from "styled-components";
import { CONSTANTS } from "../../../../../config/constants";
import { variables } from "../../../../../config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette } = variables;

const Styles = styled.div`
  margin: 40px 0;
  color: ${palette.white};

  .containerImage {
    display: flex;
    justify-content: center;
  }

  .containerButtons {
    margin-top: 64px;
  }

  /* Button */
  .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    color: ${palette.white};
    background-color: ${palette.buttonColor};
    padding: 8px 16px;
    margin-right: 24px;
    text-transform: capitalize;
    &:hover {
      color: ${palette.buttonColor};
      background-color: ${palette.white};
    }

    @media screen and (max-width: ${desktop}px) {
      margin: 16px 0;
    }
  }
`;

export default Styles;
