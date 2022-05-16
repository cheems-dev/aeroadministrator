import styled from "styled-components";
import { CONSTANTS } from "../../../config/constants";
import { variables } from "../../../config/variables";

const { BREAKPOINTS } = CONSTANTS;
const { palette, fonts } = variables;
const { tablet } = BREAKPOINTS;

const Style = styled.div`
  .button {
    font-family: ${fonts["Nova-Eb"]};
    font-size: 1.2rem;
    width: 100%;
    border-radius: 0.8rem;
    color: ${palette.white};
    padding: 0.48rem;
    background-image: ${(props) => (props.bgImage ? props.bgImage : "none")};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${tablet}px) {
      width: 100%;
    }

    &__text {
      padding-left: ${(props) => (props.bgImage ? "20px" : "none")};
    }

    &:hover {
      box-shadow: 0.2rem 0.08rem 0.08rem ${palette.gray.primary};
      transform: scale(1.05);
    }

    &[disabled] {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

export default Style;
