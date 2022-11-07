import React from 'react'
import { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Team from '../pages/Team'
import Services from '../pages/Services'
import Store from '../pages/Store'
import Contact from '../pages/Contact'
import Members from '../pages/Members'
import '../parentContainerStyles/main.css'
import Navigation from '../components/Navigation'

export default function Main() {

  const [innerHeight,setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
    setInnerWidth(window.innerWidth)
  })

  console.log(innerWidth,innerHeight)

  return (

    <div className="main">
      <div className="main_header">
        <Navigation />
      </div>
      <div style={{height:  `${innerHeight - 52}px`, width:  `${innerWidth}px` }} className="main_body">
        <Home />
        <About />
        <Team />
        <Services />
        <Store />
        <Contact />
        <Members />
      </div>
    </div>

  )
}
