import React from 'react'
// Components
import ButtonFloat from '../ButtonFloat/ButtonFloat'
// Styles
import Styles from './Container.style'

export default function Container(props) {
  const { handleToggleSidebar, children } = props

  return (
    <Styles>
      <main>
        {children}
        <ButtonFloat handleToggleSidebar={handleToggleSidebar} />
      </main>
    </Styles>
  )
}
