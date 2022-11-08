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
import {useDebouncedCallback} from 'use-debounce'

export default function Main() {

  //innerWidth bug, can use outerWidth since browser toolbars are vertical
  const [innerHeight,setInnerHeight] = useState(window.innerHeight)

  const debouncedVersion = useDebouncedCallback(() => {
    setInnerHeight(window.innerHeight)
  },20)

  window.addEventListener('resize', debouncedVersion)

  // window.addEventListener('resize', () => {
  //   setInnerHeight(window.innerHeight)
  // })

  window.addEventListener('orientationchange', () => {
    setInnerHeight(window.innerHeight)
    console.log("called baby")
  })




  return (

    <div className="main">
      <div className="main_header">
        <Navigation />
      </div>
      <div style={{height:  `${innerHeight - 52}px`}} className="main_body">
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
