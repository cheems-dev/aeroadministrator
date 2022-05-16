import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
// Styles
import Styles from './Loading.style'

export default function Loading() {
  return (
    <Styles>
      <CircularProgress />
    </Styles>
  )
}
