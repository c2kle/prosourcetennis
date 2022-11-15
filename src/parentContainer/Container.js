import React from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
import Landing from '../pages/Landing';
import { useState } from 'react';
import MainMobile from './MainMobile';
// import { useDebouncedCallback } from 'use-debounce'

export default function Container() {



  const [innerHeight, setInnerHeight] = useState("100vh")
  const [innerWidth, setInnerWidth] = useState("100vw")
  const [landed,setLanded] = useState(false)

  //innerWidth bug, can use outerWidth since browser toolbars are vertical
  

  // const debouncedHeight = useDebouncedCallback(() => {
  //   if (window.innerHeight > window.innerWidth ) {
  //     let heightRatio = (sessionStorage.getItem("portrait-height")/window.innerHeight) 
  //     setInnerHeight(sessionStorage.getItem("portrait-height") * heightRatio)
  //   } else {
  //     let heightRatio = (sessionStorage.getItem("landscape-height")/window.innerHeight)
  //     setInnerHeight(sessionStorage.getItem("landscape-height") * heightRatio) 
  //   } 
    
  // }, 1000)

  // const debouncedWidth = useDebouncedCallback(() => {
  //   if (window.innerHeight > window.innerWidth ) {
  //     let widthRatio = (sessionStorage.getItem("portrait-width")/window.innerWidth) 
  //     setInnerHeight(sessionStorage.getItem("portrait-width") * widthRatio)
  //   } else {
  //     let widthRatio = (sessionStorage.getItem("landscape-width")/window.innerWidth)
  //     setInnerHeight(sessionStorage.getItem("landscape-width") * widthRatio) 
  //   } 
    
  // }, 1000)

  // window.addEventListener('resize', debouncedVersion)


  // window.addEventListener('orientationchange', debouncedVersion)

  // window.addEventListener('resize', () => {
  //   setInnerHeight(window.innerHeight)
  // })

  // window.addEventListener('resize', () => {
  //   setInnerWidth(window.innerWidth)
  // })


  // window.addEventListener('orientationchange', () => {
  //   setInnerHeight(window.innerHeight)
  // })

  // window.addEventListener('orientationchange', () => {
  //   setInnerWidth(window.innerWidth)
  // })

  // window.addEventListener('orientationchange', debouncedHeight)
  // window.addEventListener('orientationchange', debouncedWidth)


  let bodyContent;

  if (landed === true) {
    bodyContent = <Main innerHeight={innerHeight} />
    // bodyContent = <Main />
  }
  else {
    bodyContent = <Landing innerHeight={innerHeight} setLanded={setLanded} />
    // bodyContent = <Landing setLanded={setLanded} />
  }

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container" style={{ height: innerHeight, width: innerWidth}}>{bodyContent}</div>
    // <div className="container">{bodyContent}</div>
  )
}
