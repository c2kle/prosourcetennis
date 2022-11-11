import React from 'react'
import '../componentStyles/navigationMenu.css'

export default function NavigationMenu(props) {

  const onClickHandler = (e) => {
    const name = e.target.getAttribute("name")
    window.document.getElementById(name).scrollIntoView({ block: "end" })
    props.setMenu("false")
  }

  return (
    <div className="navigation-menu-wrapper">
      <ul className="navigation-menu-wrapper-list">
        <li className="navigation-menu-wrapper-list_li" name="home" onClick={onClickHandler}>Home</li>
        <li className="navigation-menu-wrapper-list_li" name="about" onClick={onClickHandler}>About</li>
        <li className="navigation-menu-wrapper-list_li" name="team" onClick={onClickHandler}>Team</li>
        <li className="navigation-menu-wrapper-list_li" name="services" onClick={onClickHandler}>Services</li>
        <li className="navigation-menu-wrapper-list_li" name="store" onClick={onClickHandler}>Store</li>
        <li className="navigation-menu-wrapper-list_li" name="contact" onClick={onClickHandler}>Contact</li>
        <li className="navigation-menu-wrapper-list_li" name="members" onClick={onClickHandler}>Members</li>
      </ul>
    </div>
  )
}
