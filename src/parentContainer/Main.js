import React from 'react'
import Home from '../pages/Home'
import Over from '../pages/Over'
import '../parentContainerStyles/main.css'
import Navigation from '../components/Navigation'

export default function main() {
  return (
    <div className="main">
        <Navigation/>
        <Home/>
        <Over/>
    </div>

  )
}
