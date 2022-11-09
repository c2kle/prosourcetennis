import React from 'react'
import '../componentStyles/navigation.css'

export default function navigation() {

  const onClickHandler = () => {
    if(document.getElementsByClassName("navigation-bar_ul")[0].getAttribute("data-menu") === "false") {
      document.getElementsByClassName("navigation-bar_ul")[0].setAttribute("data-menu","true")
    } else {
      document.getElementsByClassName("navigation-bar_ul")[0].setAttribute("data-menu","false")
    }
  }


  return (
    <div className="navigation-bar">
      <p className="navigation-bar_logo">PRO SOURCE TENNIS</p>
      <ul className="navigation-bar_ul" data-menu="false">
        <li className="navigation-bar_ul_li" ><a href="#home">Home</a></li>
        <li className="navigation-bar_ul_li" ><a href="#about">About</a></li>
        <li className="navigation-bar_ul_li" ><a href="#team">Team</a></li>
        <li className="navigation-bar_ul_li"><a href="#services">Services</a></li>
        <li className="navigation-bar_ul_li"><a href="#store">Store</a></li>
        <li className="navigation-bar_ul_li"><a href="#contact">Contact</a></li>
        <li name="seperator" className="navigation-bar_ul_li">|</li>
        <li className="navigation-bar_ul_li"><a href="#members">Members</a></li>
      </ul>
      <button className="navigation-bar_burger" type="button" onClick={onClickHandler}>
        <svg viewBox="0 0 100 60" width="20" height="52">
          <rect className="navigation-bar_menu-bar" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="30" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="60" width="100" height="5"></rect>
        </svg>
      </button>
    </div>
  )
}
