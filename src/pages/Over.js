import React from 'react'
import About from './About'
import Team from './Team'
import Services from './Services'
import '../pageStyles/over.css'

export default function Over() {
  return (
    <div className="over">
        <div className="over_home-place"></div>
        <About />
        <Team />
        <Services />
    </div>
  )
}
