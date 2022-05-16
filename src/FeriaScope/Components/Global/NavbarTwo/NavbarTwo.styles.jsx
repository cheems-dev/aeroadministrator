import styled from "styled-components";
import { CONSTANTS } from "../../../../AdministratorScope/config/constants";
import { variables } from "../../../../AdministratorScope/config/variables";

const { desktop } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background: ${palette.neutro.second2};
    color: ${palette.dark};
  }

  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    font-size: 12px;
    font-family: ${fonts["Nova-Eb"]};
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .css-19r6kue-MuiContainer-root {
    padding: 0 96px;
  }

  .link {
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${palette.grSecond2.c2};
  }

  .icon {
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .search {
    display: flex;
    gap: 16px;
    margin: 0 16px;
    align-items: center;
    @media screen and (max-width: ${desktop}px) {
      display: none;
    }
  }
`;

const TypographyStyle = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: fonts["Nova-Eb"],
  fontSize: "10px",
  color: palette.dark,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
};

const BoxStyle = { flexGrow: 1, display: { xs: "flex", md: "none" } };

const anchorOrigin = {
  vertical: "bottom",
  horizontal: "left",
};

const transformOrigin = {
  vertical: "top",
  horizontal: "left",
};

const sx = {
  display: { xs: "block", md: "none" },
};

const sxTwo = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
  fontFamily: fonts["Nova-Eb"],
};

const BoxStyleTwo = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  justifyContent: "space-around",
};

const ButtonStyle = {
  my: 2,
  display: "block",
  fontFamily: fonts["Nova-Rg"],
  fontSize: "12px",
  color: palette.dark,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
};

export {
  Styles,
  TypographyStyle,
  BoxStyle,
  anchorOrigin,
  transformOrigin,
  sx,
  sxTwo,
  BoxStyleTwo,
  ButtonStyle,
};
