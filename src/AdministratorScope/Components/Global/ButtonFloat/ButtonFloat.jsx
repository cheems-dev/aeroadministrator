import React from 'react'
import { FaBars } from 'react-icons/fa'
// Style
import Styles from './ButtonFloat.style'

export default function ButtonFloat(props) {
  const { handleToggleSidebar } = props

  return (
    <Styles>
      <div className='btn-toggle' onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
    </Styles>
  )
}
