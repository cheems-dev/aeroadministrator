import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { mobile, tablet } = CONSTANTS.BREAKPOINTS;
const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  padding: 56px 0 40px 0;
  font-size: 22px;
  color: ${palette.white};
  font-family: ${fonts["Nova-Rg"]};

  @media screen and (max-width: ${tablet}px) {
    padding: 32px 0 32px 0;
  }

  .TabsNavigation {
    &__tab {
      font-family: ${fonts["Nova-Eb"]};
      padding: 12px;
      margin-right: 56px;
      font-size: 20px;
      text-transform: capitalize;
      text-align: center;
      padding-bottom: 24px;
      font-size: 20px;
      background: ${gradients.second1};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${palette.grSecond2.c2};

      &:hover {
        transform: scale(1.05);
      }

      @media screen and (max-width: ${mobile}px) {
        padding-bottom: 8px;
        margin-right: 0;
      }
    }
  }
`;

export default Styles;
