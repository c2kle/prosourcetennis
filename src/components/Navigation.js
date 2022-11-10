import React from 'react'
import '../componentStyles/navigation.css'

export default function navigation() {

  // const onClickHandler = () => {
  //   if(document.getElementsByClassName("navigation-bar_ul")[0].getAttribute("data-menu") === "false") {
  //     document.getElementsByClassName("navigation-bar_ul")[0].setAttribute("data-menu","true")
  //   } else {
  //     document.getElementsByClassName("navigation-bar_ul")[0].setAttribute("data-menu","false")
  //   }
  // }
  const onClickHandler = (e) => {
    const name = e.target.getAttribute("name")
    window.document.getElementById(name).scrollIntoView()
  }


  return (
    <div className="navigation-bar">
      <p className="navigation-bar_logo">PRO SOURCE TENNIS</p>
      <ul className="navigation-bar_ul" data-menu="false">
        <li className="navigation-bar_ul_li" name="home" onClick={onClickHandler}>Home</li>
        <li className="navigation-bar_ul_li" name="about" onClick={onClickHandler}>About</li>
        <li className="navigation-bar_ul_li" name="team" onClick={onClickHandler}>Team</li>
        <li className="navigation-bar_ul_li" name="services" onClick={onClickHandler}>Services</li>
        <li className="navigation-bar_ul_li" name="store" onClick={onClickHandler}>Store</li>
        <li className="navigation-bar_ul_li" name="contact" onClick={onClickHandler}>Contact</li>
        <li name="seperator" className="navigation-bar_ul_li">|</li>
        <li className="navigation-bar_ul_li" name="members" onClick={onClickHandler}>Members</li>
      </ul>
      <button className="navigation-bar_burger" type="button" >
        <svg viewBox="0 0 100 60" width="20" height="52">
          <rect className="navigation-bar_menu-bar" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="30" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="60" width="100" height="5"></rect>
        </svg>
      </button>
    </div>
  )
}
