import React from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
// import Landing from '../pages/Landing';
import { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce'

export default function Container() {

  // const [landed,setLanded] = useState(false)
  // let bodyContent;

  // if (landed === true) {
  //   bodyContent = <Main />
  // }
  // else {
  //   bodyContent = <Landing setLanded={setLanded} />
  // }

  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  //innerWidth bug, can use outerWidth since browser toolbars are vertical


  // const debouncedVersion = useDebouncedCallback(() => {
  //   setInnerHeight(window.innerHeight)
  // }, 20)

  // window.addEventListener('resize', debouncedVersion)


  // window.addEventListener('orientationchange', debouncedVersion)

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
    setInnerHeight(window.innerWidth)
  })

  window.addEventListener('orientationchange', () => {
    setInnerHeight(window.innerHeight)
    setInnerWidth(window.innerWidth)
  })

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container" style={{ height: innerHeight, width: innerWidth }}><Main innerHeight={innerHeight} /></div>
  )
}
