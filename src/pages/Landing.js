import React from 'react'
import '../pageStyles/landing.css'


export default function Landing(props) {

  const onClickHandler = () => {

    props.setLanded(true)

  }


  return (
    <div style={{height: props.innerHeight}} className="landing" onClick={onClickHandler}>
      <div className="landing_body" >
        PRO SOURCE TENNIS 
      </div>
      <button className="landing_button" >ENTER</button>
    </div>
  )
}
