import React, { Fragment } from 'react'

import { TableCell } from '@mui/material'
// Styles

export default function InterntCells(props) {
  const { data } = props

  return (
    <Fragment>
      <TableCell className='textSubCell'>{data?.progress || '-'} %</TableCell>
      <TableCell className='textSubCell'>{`${data?.asistencia} / ${data?.asistencia_total}`}</TableCell>
      <TableCell className='textSubCell'>{data?.test_01 || '-'}</TableCell>
      <TableCell className='textSubCell'>{data?.test_02 || '-'}</TableCell>
      <TableCell className='textSubCell'>{data?.proyects || '-'}</TableCell>
      <TableCell className='textSubCell'>{data?.prom || '-'}</TableCell>
      <TableCell className='textSubCell'>{data?.inasistencia || '-'}</TableCell>
      <TableCell className='textSubCell'>{data?.total || '-'}</TableCell>
    </Fragment>
  )
}
