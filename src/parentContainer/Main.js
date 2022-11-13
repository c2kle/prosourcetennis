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
import NavigationBar from '../components/NavigationBar'
import NavigationMenu from '../components/NavigationMenu'


export default function Main(props) {

  const [menu,setMenu] = useState("false")

  let displayMenu = <NavigationMenu setMenu={setMenu}/>

  if (menu === "false") {
    displayMenu = null
  }

  return (

    <div className="main" style={{height: props.innerHeight, gridTemplateRows: `52px ${props.innerHeight - 52}px`}}>
      <div className="main_header">
        <NavigationBar menu={menu} setMenu={setMenu}/>
      </div>
      <div className="main_body">
        <Home />
        <About />
        <Team />
        <Services />
        <Store />
        <Contact />
        <Members />
        {displayMenu}
      </div>
    </div>

  )
}
