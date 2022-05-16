import styled from 'styled-components';
import { variables } from '../config/variables';

const { palette } = variables;

const Style = styled.div`
  min-height: 100vh;
  width: auto;
  display: flex;
  position: relative;
  background: ${palette.containerColor};
  background-blend-mode: darken;

  .sidebar {
    display: flex;
    align-items: center;
    justify-content: center;

    .sidebar-btn {
      transition: width 0.4s;
      width: 160px;
      padding: 1px 16px;
      border-radius: 32px;
      // TODO: cambiar color trayendolo desde las variables
      background: rgba(255, 255, 255, 0.05);
      color: #adadad; // TODO: cambiar color trayendolo desde las variables
      text-decoration: none;
      margin: 0 auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-overflow: ellipsis;
      overflow: hidden;

      span {
        margin-left: 4px;
        font-size: 12px;
      }

      &:hover {
        color: $highlight-color;
      }
    }
  }

  .collapsed {
    .sidebar-btn {
      display: inline-block;
      line-height: 40px;
      padding: 0;
    }
  }
`;

export default Style;
