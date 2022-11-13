import React from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
import Landing from '../pages/Landing';
import { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce'

export default function Container() {

  console.log(window.devicePixelRatio / document.documentElement.clientWidth)

  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [landed,setLanded] = useState(false)

  //innerWidth bug, can use outerWidth since browser toolbars are vertical
  

  // const debouncedVersion = useDebouncedCallback(() => {
  //   window.alert(window.devicePixelRatio)
  // }, 200)

  // window.addEventListener('resize', debouncedVersion)


  // window.addEventListener('orientationchange', debouncedVersion)

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
  })

  window.addEventListener('resize', () => {
    setInnerWidth(window.innerWidth)
  })


  window.addEventListener('orientationchange', () => {
    setInnerHeight(window.innerHeight)
  })

  window.addEventListener('orientationchange', () => {
    setInnerWidth(window.innerWidth)
  })

  window.addEventListener('orientationchange', () => {
    document.body.style.zoom = "100%"
  })

  // window.addEventListener('orientationchange', debouncedVersion)


  let bodyContent;

  if (landed === true) {
    bodyContent = <Main innerHeight={innerHeight} />
  }
  else {
    bodyContent = <Landing innerHeight={innerHeight} setLanded={setLanded} />
  }

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container" style={{ height: innerHeight, width: innerWidth}}>{bodyContent}</div>
  )
}
