import React from 'react'
import '../componentStyles/navigation.css'

export default function navigation() {
  return (
    <div className="navigation-bar">
        <ul className="navigation-bar_ul">
            <li className="navigation-bar_ul_li">About</li>
            <li className="navigation-bar_ul_li">Team</li>
            <li className="navigation-bar_ul_li">Services</li>
            <li className="navigation-bar_ul_li">Store</li>
        </ul>
    </div>
  )
}
