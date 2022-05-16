import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile } = CONSTANTS.BREAKPOINTS;
const { palette, fonts } = variables;

const Styles = styled.div`
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-16px) scale(1.03);
  }

  .title {
    &__card {
      margin-top: 24px;
      text-align: center;
      font-size: 16px;
      font-family: ${fonts["Nova-Eb"]};
      color: ${palette.colorDegradedTwo};

      @media screen and (max-width: ${desktop}px) {
        margin-top: 16px;
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: ${mobile}px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export { Styles };
