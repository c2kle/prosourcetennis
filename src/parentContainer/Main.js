import React from 'react'
// import { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Team from '../pages/Team'
import Services from '../pages/Services'
import Store from '../pages/Store'
import Contact from '../pages/Contact'
import Members from '../pages/Members'
import '../parentContainerStyles/main.css'
import Navigation from '../components/Navigation'


export default function Main(props) {

  return (

    <div className="main">
      <div className="main_header">
        <Navigation />
      </div>
      <div style={{height:  `${props.innerHeight - 52}px`}} className="main_body">
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
