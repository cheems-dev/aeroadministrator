import styled from 'styled-components';
import { CONSTANTS } from '../../../../AdministratorScope/config/constants';
import { variables } from '../../../../AdministratorScope/config/variables';

const { tablet, desktop } = CONSTANTS.BREAKPOINTS;
const { fonts, gradients, palette } = variables;

const Styles = styled.div`
  background: ${gradients.custom2};
  background-blend-mode: darken;
  background-color: ${gradients.custom2};
  width: auto;
  padding: 0 96px;

    @media screen and (max-width: ${desktop}px) {
      padding: 0 32px;
    }

    @media screen and (max-width: ${tablet}px) {
      padding: 0 16px;

  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background: ${gradients.custom2};
    background-blend-mode: darken;
    background-color: ${gradients.custom2};
  }

  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
    font-size: 12px;
    font-family: ${fonts['Nova-Eb']};
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 3px solid ${palette.palidBlue} !important;
  }
  
  .buttonMUI {
 font-size: 12px;
    font-family: ${fonts['Nova-Eb']};
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 3px solid ${palette.palidBlue} !important;
  }


  .css-19r6kue-MuiContainer-root {
    padding: 0 96px;

    @media screen and (max-width: ${desktop}px) {
      padding: 0 32px;
    }

    @media screen and (max-width: ${tablet}px) {
      padding: 0 16px;
    }
  }

  .link {
    background: ${gradients.second1};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${palette.grSecond2.c2};
  }
`;

const TypographyStyle = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: fonts['Nova-Eb'],
  fontSize: '16px',
};

const BoxStyle = { flexGrow: 1, display: { xs: 'flex', md: 'none' } };

const anchorOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

const anchorOriginTwo = {
  vertical: 'top',
  horizontal: 'left',
};

const transformOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

const sx = {
  display: { xs: 'block', md: 'none' },
};

const sxTwo = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
  fontFamily: fonts['Nova-Eb'],
};

const BoxStyleTwo = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'space-around',
};

const ButtonStyle = {
  my: 2,
  color: 'white',
  display: 'flex',
  fontFamily: fonts['Nova-Rg'],
  fontSize: '10px',
};

export {
  Styles,
  TypographyStyle,
  BoxStyle,
  anchorOrigin,
  anchorOriginTwo,
  transformOrigin,
  sx,
  sxTwo,
  BoxStyleTwo,
  ButtonStyle,
};
