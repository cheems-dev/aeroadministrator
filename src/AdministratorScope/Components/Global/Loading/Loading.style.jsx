import styled from 'styled-components'
import { variables } from '../../../config/variables'

const { palette } = variables

const Styles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .css-18lrjg1-MuiCircularProgress-root {
    color: ${palette.neon2};
  }
`

export default Styles
