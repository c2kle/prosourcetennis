import React from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
import Landing from '../pages/Landing';
import { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce'

export default function Container() {



  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [availWidth, setAvailWidth] = useState(window.screen.width)
  const [landed,setLanded] = useState(false)

  //innerWidth bug, can use outerWidth since browser toolbars are vertical
  

  // const debouncedVersion = useDebouncedCallback(() => {
  //   setInnerHeight(window.innerHeight)
  // }, 20)

  // window.addEventListener('resize', debouncedVersion)


  // window.addEventListener('orientationchange', debouncedVersion)

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
    setAvailWidth(window.screen.width)
  })

  window.addEventListener('orientationchange', () => {
    setInnerHeight(window.innerHeight)
    setAvailWidth(window.screen.width)
  })


  let bodyContent;

  if (landed === true) {
    bodyContent = <Main innerHeight={innerHeight} />
  }
  else {
    bodyContent = <Landing innerHeight={innerHeight} setLanded={setLanded} />
  }

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container" style={{ height: innerHeight, width: availWidth }}>{bodyContent}</div>
  )
}
