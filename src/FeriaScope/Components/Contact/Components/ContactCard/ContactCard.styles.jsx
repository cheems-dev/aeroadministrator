import styled from "styled-components";
import { CONSTANTS } from "../../../../../AdministratorScope/config/constants";
import { variables } from "../../../../../AdministratorScope/config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { palette, fonts } = variables;

const Styles = styled.div`
  max-width: 345px;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-16px) scale(1.03);
  }

  @media screen and (max-width: ${desktop}px) {
    display: flex;
    justify-content: center;
  }

  .image {
    max-width: 100%;
    width: 160px;
    height: 160px;
    border-radius: 12px;
    background-image: linear-gradient(
        357.86deg,
        ${palette.colorImageGray} 3.01%,
        rgba(99, 109, 156, 0) 90.5%
      ),
      url(${(props) => props.src});
    position: absolute;
    background-size: cover;
    top: -120px;
    left: 24px;

    @media screen and (max-width: ${desktop}px) {
      left: 22.5%;
    }
  }
`;

const cardStyle = {
  backgroundColor: palette.colorCardDegree,
  padding: "16px",
  paddingTop: 8,
  borderRadius: "8px",
};

const typografyStyle = {
  color: palette.white,
  fontFamily: fonts["Nova-Eb"],
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "32px",
  lineHeight: "32px",
};

const typografyStyleTwo = {
  color: palette.white,
  fontFamily: fonts["Nova-Rg"],
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
};

const typografyStyleTree = {
  color: palette.white,
  fontFamily: fonts["Nova-Lt"],
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
};

const colorButton = {
  color: palette.colorButtonCard,
};

export {
  Styles,
  cardStyle,
  typografyStyle,
  typografyStyleTwo,
  typografyStyleTree,
  colorButton,
};
