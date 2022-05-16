import styled from 'styled-components';
import { CONSTANTS } from '../../../config/constants';
import { variables } from '../../../config/variables';

const { mobile } = CONSTANTS.BREAKPOINTS;
const { fonts, palette, gradients } = variables;

const Style = styled.div`
  display: contents;
  overflow: hidden;
  padding-right: 96px;
  min-height: 100vh;

  .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu > .pro-inner-item {
    border-style: none none solid none;
    border-width: ${(props) => (props.collapsed ? '0' : '0.4px')};
    border-color: ${palette.neutro.second3};
    @media screen and (max-width: ${mobile}px) {
      border-width: 0;
    }
  }

  .pro-sidebar
    .pro-menu
    .pro-menu-item.pro-sub-menu
    > .pro-inner-item
    > .pro-arrow-wrapper {
    display: none;
  }

  .logo {
    margin-top: 40px;
    margin-bottom: 32px;
  }

  .title {
    color: ${palette.white};
    font-family: ${fonts['Nova-Rg']};
    padding: 24px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .menu {
    text-align: left;
    color: ${palette.white};
    font-family: ${fonts['Nova-Eb']};
    font-size: 32px;
    display: ${(props) => (props.collapsed ? 'block' : 'flex')};
    flex-direction: column;
    align-items: center;

    &__icon {
      height: 20px;
      width: 20px;
    }

    &__submenu {
      margin-top: 32px;
      color: ${palette.white};
      align-self: center;
      flex-direction: column;

      &__item {
        height: 24px;
        margin-top: 32px;
        display: ${(props) => (props.collapsed ? 'block' : 'flex')};
        justify-content: start;
      }

      &__actions {
        align-self: flex-start;
        margin-top: 20px;
      }
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

export default Style;
