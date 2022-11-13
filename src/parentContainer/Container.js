import React from 'react'
import '../parentContainerStyles/container.css'
import Main from './Main';
import Landing from '../pages/Landing';
import { useState } from 'react';

export default function Container() {

  const [landed,setLanded] = useState(false)

  let bodyContent;

  if (landed === true) {
    bodyContent = <Main />
  }
  else {
    bodyContent = <Landing setLanded={setLanded} />
  }

  return (
    // <div className="container">{bodyContent}</div>
    <div className="container">{bodyContent}</div>
  )
}
