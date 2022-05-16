import styled from 'styled-components'
import { variables } from '../../../../config/variables'

const { palette, fonts } = variables
const Style = styled.div`
  width: 100%;
  text-align: center;
  small {
    color: ${palette.white};
    font-family: ${fonts['Nova-Rg']};
  }
`

export default Style
