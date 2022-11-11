import React from 'react'
import '../componentStyles/navigationBar.css'
import NavigationList from './NavigationList'

export default function NavigationBar(props) {


  const onClickHandler = () => {
    if (props.menu === "false") {
      props.setMenu("true")
    } else {
      props.setMenu("false")
    }

  }

  return (
    <div className="navigation-bar">
      <p className="navigation-bar_logo">PRO SOURCE TENNIS</p>
      <NavigationList />
      <button className="navigation-bar_burger" type="button" onClick={onClickHandler} >
        <svg viewBox="0 0 100 60" width="20" height="52">
          <rect className="navigation-bar_menu-bar" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="30" width="100" height="5"></rect>
          <rect className="navigation-bar_menu-bar" y="60" width="100" height="5"></rect>
        </svg>
      </button>
    </div>
  )
}
