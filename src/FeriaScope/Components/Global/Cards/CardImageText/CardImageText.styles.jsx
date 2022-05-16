import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { mobile } = CONSTANTS.BREAKPOINTS;
const { palette, fonts } = variables;

const Styles = styled.div`
  background-image: url(${(props) => props.image});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.border}px;
  position: relative;
  transition: transform 0.3s;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    transform: translateY(-16px) scale(1.03);
  }

  @media screen and (max-width: ${mobile}px) {
    display: flex;
    justify-content: center;
  }

  .title {
    font-family: ${fonts["Nova-Eb"]};
    font-size: 18px;
    color: ${palette.palidBlue};
  }

  .number {
    font-family: ${fonts["Nova-Eb"]};
    text-align: center;
    font-size: 18px;

    color: ${palette.palidBlue};
  }
`;

const boxStyleTwo = {
  position: "absolute",
  bottom: 0,
  right: 0,
  padding: "8px",
};

export { Styles, boxStyleTwo };
