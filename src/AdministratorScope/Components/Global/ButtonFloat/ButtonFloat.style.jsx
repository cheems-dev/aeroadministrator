import styled from 'styled-components'
import { CONSTANTS } from '../../../config/constants'
import { variables } from '../../../config/variables'

const { BREAKPOINTS } = CONSTANTS
const { palette } = variables

const Styles = styled.div`
  .btn-toggle {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: ${palette.neutro.second6};
    color: ${palette.white};
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 16px;
    margin-bottom: 16px;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
      display: flex;
      position: fixed;
    }
  }
`

export default Styles
