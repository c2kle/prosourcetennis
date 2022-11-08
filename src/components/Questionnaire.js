import React, { useEffect } from 'react'
import { useState } from 'react'
import '../componentStyles/questionnaire.css'

export default function Questionnaire() {



  let question;

  const [number, setNumber] = useState(1);


  const onNextHandler = () => {
    setNumber(number + 1)
    document.getElementsByClassName(`questionnaire_question`)[0].scrollIntoView("alignToTop")
   

  
  }

  const onPreviousHandler = () => {
    setNumber(number - 1)
    document.getElementsByClassName(`questionnaire_question`)[0].scrollIntoView("alignToTop")

  
  }

  if (number === 1) {
    question = (
      <div id="q1" className="questionnaire_question">
        <div className="questionnaire_question_title">I am:</div>
        <div className="questionnaire_question_answers">
          <button className="questionnaire_question_answers_option">Player</button>
          <button className="questionnaire_question_answers_option">Parent</button>
          <button className="questionnaire_question_answers_option">Coach</button>
        </div>
        <div className="questionnaire_question_nav">
        <button className="questionnaire_question_nav_button"></button>
          <button className="questionnaire_question_nav_button" onClick={onNextHandler}>Next</button>
        </div>
      </div>
    )
  } else if (number === 2) {
    question = (
      <div id="q2" className="questionnaire_question">
        <div className="questionnaire_question_title">My goals are:</div>
        <div className="questionnaire_question_answers">
          <button className="questionnaire_question_answers_option">Pro</button>
          <button className="questionnaire_question_answers_option">D1</button>
          <button className="questionnaire_question_answers_option">Collegiate</button>
          <button className="questionnaire_question_answers_option">Scholarship</button>
          <button className="questionnaire_question_answers_option">Ranking +</button>
          <button className="questionnaire_question_answers_option">Game +</button>
        </div>
        <div className="questionnaire_question_nav">
          <button className="questionnaire_question_nav_button" onClick={onPreviousHandler}>Previous</button>
          <button className="questionnaire_question_nav_button">Next</button>
        </div>
      </div>
    )
  }

    
  return (
    <div className="questionnaire">
      {question}


      {/*<div className="quiestionnaire_question">
        <div className="quiestionnaire_question_title">Weekly tennis commitment:</div>
        <div className="quiestionnaire_question_answers">
        <button className="quiestionnaire_question_answers_option">{"<"} 1 hr</button>
        <button className="quiestionnaire_question_answers_option">3 hrs</button>
        <button className="quiestionnaire_question_answers_option">Collegiate</button>
        <button className="quiestionnaire_question_answers_option">Scholarship</button>
        <button className="quiestionnaire_question_answers_option">Ranking +</button>
        <button className="quiestionnaire_question_answers_option">Game +</button>
        </div>

      </div>

      <div className="question">
        <div className="question_title">Monthy tennis budget:</div>
        <div className="question_answers">
        <button className="question_answers_option">{"<"} 60$</button>
        <button className="question_answers_option">180$</button>
        <button className="question_answers_option">500$</button>
        <button className="question_answers_option">1000$</button>
        <button className="question_answers_option">{">"} 2000$</button>
        <button className="question_answers_option">Whatever it takes</button>
        </div>

      </div>
      <div className="quiestionnaire_question">
        <div className="quiestionnaire_question_title">Seeking to develop:</div>
        <div className="quiestionnaire_question_answers">
        <button className="quiestionnaire_question_answers_option">Results</button>
        <button className="question_answers_option">Specific Shot</button>
        <button className="question_answers_option">Tactics</button>
        <button className="question_answers_option">Overall Game</button>
        <button className="question_answers_option">Mental Toughness</button>
        <button className="question_answers_option">Physical Condition</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Game Style:</div>
        <div className="question_answers">
        <button className="question_answers_option">Results</button>
        <button className="question_answers_option">Specific Shot</button>
        <button className="question_answers_option">Tactics</button>
        <button className="question_answers_option">Overall Game</button>
        <button className="question_answers_option">Mental Toughness</button>
        <button className="question_answers_option">Physical Condition</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Current Level:</div>
        <div className="question_answers">
        <button className="question_answers_option">> 500 ATP</button>
        <button className="question_answers_option">ATP Ranked</button>
        <button className="question_answers_option">D1</button>
        <button className="question_answers_option">Collegiate</button>
        <button className="question_answers_option">Top 100 National Junior</button>
        <button className="question_answers_option">Top 50 Sectional Junior</button>
        <button className="question_answers_option">Top 10 State Junior</button>
        <button className="question_answers_option">High School</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Rankings:</div>
        <div className="question_answers">
        <button className="question_answers_option">UTR</button>
        <button className="question_answers_option">Tennis Recruiting</button>
        <button className="question_answers_option">ATP</button>
        <button className="question_answers_option">ITF</button>
        <button className="question_answers_option">USTA National</button>
        <button className="question_answers_option">USTA Sectional</button>
        <button className="question_answers_option">USTA State</button>
        <button className="question_answers_option">High School Team</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Equipment:</div>
        <div className="question_answers">
        <button className="question_answers_option">Racquet</button>
        <button className="question_answers_option">Grip Size</button>
        <button className="question_answers_option">String (Main)</button>
        <button className="question_answers_option">String (Cross)</button>
        <button className="question_answers_option">String Tension (Main)</button>
        <button className="question_answers_option">String Tension (Cross)</button>
        <button className="question_answers_option">Shoes</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Accessibility:</div>
        <div className="question_answers">
        <button className="question_answers_option">Video Camera</button>
        <button className="question_answers_option">Fence Mount</button>
        <button className="question_answers_option">Standing Tripod</button>
        <button className="question_answers_option">Smart Phone Camera</button>
        <button className="question_answers_option">Ability to upload (Internet)</button>
        <button className="question_answers_option">Youtube Account</button>
        <button className="question_answers_option">Dropbox</button>
        <button className="question_answers_option">Google Drive</button>
        </div>

      </div>
      <div className="question">
        <div className="question_title">Basic Info:</div>
        <div className="question_answers">
        <button className="question_answers_option">Name</button>
        <button className="question_answers_option">DOB</button>
        <button className="question_answers_option">Graduating Class (High School)</button>
        <button className="question_answers_option">Height</button>
        <button className="question_answers_option">Weight</button>
        <button className="question_answers_option">City</button>
        <button className="question_answers_option">State</button>
        <button className="question_answers_option">Dropbox</button>
        <button className="question_answers_option">Google Drive</button>
        </div>

      </div> 

       <div className="home_wrapper">
        <div className="home_wrapper_section-1">
        <h1 className="home_wrapper_section_h1">YOU ARE:</h1>
          <h1 className="home_wrapper_section_h1">ELITE TENNIS CONSULTING</h1>
        </div>
  </div> */}
    </div>
  )
}
