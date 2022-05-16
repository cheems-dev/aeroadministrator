import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop, mobile, hd } = CONSTANTS.BREAKPOINTS;
const { fonts } = variables;

const Styles = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  gap: 120px;
  align-items: center;
  padding: 104px 0;

  @media screen and (max-width: ${hd}px) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: ${hd}px) {
    justify-content: center;
  }

  @media screen and (max-width: ${desktop}px) {
    gap: 0;
    padding: 40px 0;
    flex-direction: ${(props) =>
      props.reverse ? "column-reverse" : "column-reverse"};
  }

  .container {
    &__text {
      width: 540px;

      @media screen and (max-width: ${desktop}px) {
        width: auto;
      }
    }
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;

    @media screen and (max-width: ${desktop}px) {
      padding-top: 24px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 640;
      text-align: center;
    }

    @media screen and (max-width: ${mobile}px) {
      font-size: 16px;
      line-height: 24px;
      font-weight: 480;
    }
  }

  .paragraph {
    padding-top: 48px;
    font-family: ${fonts["Nova-Lt"]};
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: ${desktop}px) {
      padding: 32px 0;
      text-align: justify;
      text-justify: inter-word;
    }

    @media screen and (max-width: ${mobile}px) {
      padding: 24px 0;
    }
  }
`;

export default Styles;
