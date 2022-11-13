import React, { useEffect } from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
import Landing from '../pages/Landing';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce'

export default function Container() {



  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [landed,setLanded] = useState(false)

  //innerWidth bug, can use outerWidth since browser toolbars are vertical
  

  const debouncedVersion = useDebouncedCallback(() => {
    console.log('debounced')
    window.dispatchEvent( new Event('resize'))
    window.alert("running test")
  }, 200)

  // window.addEventListener('resize', debouncedVersion)


  // window.addEventListener('orientationchange', debouncedVersion)

  window.addEventListener('resize', () => {
    setInnerHeight(window.innerHeight)
  })

  window.addEventListener('orientationchange', () => {
    setInnerHeight(window.innerHeight)
  })

  window.addEventListener('orientationchange', debouncedVersion)


  let bodyContent;

  if (landed === true) {
    bodyContent = <Main innerHeight={innerHeight} />
  }
  else {
    bodyContent = <Landing innerHeight={innerHeight} setLanded={setLanded} />
  }

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container" style={{ height: innerHeight}}>{bodyContent}</div>
  )
}
