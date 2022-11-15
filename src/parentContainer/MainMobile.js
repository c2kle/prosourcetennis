import React from 'react'
import '../parentContainerStyles/mainMobile.css'
import { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Team from '../pages/Team'
import Services from '../pages/Services'
import Store from '../pages/Store'
import Contact from '../pages/Contact'
import Members from '../pages/Members'
import NavigationBar from '../components/NavigationBar'
import NavigationMenu from '../components/NavigationMenu'
import TeamProfiles from '../components/TeamProfiles'


export default function MainMobile(props) {

    const [menu,setMenu] = useState("false")

    let displayMenu = <NavigationMenu setMenu={setMenu}/>

    if (menu === "false") {
        displayMenu = null
      }

  return (

    <div className="mainMobile" style={{height: props.innerHeight}}>
    <div className="mainMobile_header">
      <NavigationBar menu={menu} setMenu={setMenu}/>
    </div>
    <div className="mainMobile_body">
      <Home />
      <About />
      <Team />
      {/* <Services />
      <Store />
      <Contact />
      <Members /> */}
      {displayMenu}
    </div>
  </div>

  )
}
