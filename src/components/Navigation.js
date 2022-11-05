import React from 'react'
import '../componentStyles/navigation.css'

export default function navigation() {


  return (
    <div className="navigation-bar">
      <p className="logo">PRO SOURCE TENNIS</p>
        <ul className="navigation-bar_ul">
            <li className="navigation-bar_ul_li" ><a href="#home">Home</a></li>
            <li className="navigation-bar_ul_li" ><a href="#about">About</a></li>
            <li className="navigation-bar_ul_li" ><a href="#team">Team</a></li>
            <li className="navigation-bar_ul_li">Services</li>
            <li className="navigation-bar_ul_li">Store</li>
            <li className="navigation-bar_ul_li">Contact</li>
            <li className="navigation-bar_ul_li"></li>
        </ul>
    </div>
  )
}
