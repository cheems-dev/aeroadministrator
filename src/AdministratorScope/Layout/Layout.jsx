import React, { useState } from 'react'
// Components
import Container from '../Components/Global/Container/Container'
import Sidebar from '../Components/Global/Sidebar/Sidebar'
// Styles
import Style from './Layout.style'

export default function Layout(props) {
  const { children } = props
  const [toggled, setToggled] = useState(false)

  const handleToggleSidebar = (value) => {
    setToggled(value)
  }

  return (
    <Style className={`app  ${toggled ? 'toggled' : ''}`}>
      <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <Container handleToggleSidebar={handleToggleSidebar}>
        {children}
      </Container>
    </Style>
  )
}
