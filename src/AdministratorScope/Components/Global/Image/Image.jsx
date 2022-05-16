import React from 'react'
//Style
import Style from './Image.style'

export default function Image(props) {
  const { url, alt, height, width } = props
  return (
    <Style>
      <img src={url} alt={alt} height={height} width={width} />
    </Style>
  )
}
