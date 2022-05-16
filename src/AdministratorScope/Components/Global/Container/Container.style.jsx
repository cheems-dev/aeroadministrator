import styled from 'styled-components'
import { CONSTANTS } from '../../../config/constants'
import { variables } from '../../../config/variables'

const { BREAKPOINTS } = CONSTANTS
const { palette } = variables

const Styles = styled.div`
  width: -webkit-fill-available;
  height: auto;
  background: ${palette.containerColor};
  background-blend-mode: darken;

  main {
    padding: 0 64px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .block {
      display: flex;
      margin-bottom: 24px;
      font-size: 16px;
      > span {
        margin-left: 8px;
      }
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
      overflow-x: hidden;
      padding: 0 32px;
    }
  }
`

export default Styles
