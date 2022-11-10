import React from 'react'
import '../componentStyles/welcome.css'

export default function Welcome(props) {


  const onClickHandler = () => {
    props.setDisplayQuestionnaire("true")
  } 

  return (
    <div className="welcome-wrapper">
        <div className="welcome-wrapper_section">
            <h1 className="welcome-wrapper_section_h1">ELITE TENNIS CONSULTING</h1>
            <p className="welcome-wrapper_section_p">Complete our comprehensive tennis profile questionnaire to begin 
            your journey of reaching new heights in your tennis performance</p>
            <button className="welcome-wrapper_section_button" onClick={onClickHandler}>Get Started</button>
        </div>
    </div>
  )
}
