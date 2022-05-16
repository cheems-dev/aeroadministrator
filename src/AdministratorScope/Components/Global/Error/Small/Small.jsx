import React from 'react'
import Style from '../../Button/Button.style'

export default function Small(props) {
  const { text } = props
  return (
    <Style>
      <small>{text}</small>
    </Style>
  )
}
