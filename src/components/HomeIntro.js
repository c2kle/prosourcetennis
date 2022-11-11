import React from 'react'
import '../componentStyles/homeIntro.css'

export default function HomeIntro(props) {


  const onClickHandler = () => {
    props.setDisplayQuestionnaire("true")
  } 

  return (
    <div className="homeIntro-wrapper">
        <div className="homeIntro-wrapper_section">
            <h1 className="homeIntro-wrapper_section_h1">ELITE TENNIS CONSULTING</h1>
            <p className="homeIntro-wrapper_section_p">Complete our comprehensive tennis profile questionnaire to begin 
            your journey of reaching new heights in your tennis performance</p>
            <button className="homeIntro-wrapper_section_button" onClick={onClickHandler}>Get Started</button>
        </div>
    </div>
  )
}
