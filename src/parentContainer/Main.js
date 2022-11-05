import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Team from '../pages/Team'
import '../parentContainerStyles/main.css'
import Navigation from '../components/Navigation'

export default function main() {
  return (
    <div className="main">
        <Navigation/>
        <Home/>
        <About/>
        <Team/>
    </div>

  )
}
