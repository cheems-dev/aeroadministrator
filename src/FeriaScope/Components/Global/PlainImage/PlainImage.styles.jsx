import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";

const { desktop } = CONSTANTS.BREAKPOINTS;

const Styles = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "0")}px;

  @media screen and (max-width: ${desktop}px) {
    display: flex;
    justify-content: center;
    padding: none;
    text-align: center;
  }

  .image {
    border-radius: ${(props) => (props.radius ? props.radius : "16")}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    @media screen and (max-width: ${desktop}px) {
      max-width: ${(props) => props.width}px;
      max-height: ${(props) => props.height}px;
      padding: 0;
      text-align: center;
      margin: 0;
    }
  }
`;

export default Styles;
