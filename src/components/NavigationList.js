import React from 'react'
import '../componentStyles/navigationList.css'

export default function NavigationList() {

    const onClickHandler = (e) => {
        const name = e.target.getAttribute("name")
        window.document.getElementById(name).scrollIntoView()
    }

    return (
        <ul className="navigation-list">
            <li className="navigation-list_li" name="home" onClick={onClickHandler}>Home</li>
            <li className="navigation-list_li" name="about" onClick={onClickHandler}>About</li>
            <li className="navigation-list_li" name="team" onClick={onClickHandler}>Team</li>
            <li className="navigation-list_li" name="services" onClick={onClickHandler}>Services</li>
            <li className="navigation-list_li" name="store" onClick={onClickHandler}>Store</li>
            <li className="navigation-list_li" name="contact" onClick={onClickHandler}>Contact</li>
            <li name="seperator" className="navigation-list_li">|</li>
            <li className="navigation-list_li" name="members" onClick={onClickHandler}>Members</li>
        </ul>
    )
}
