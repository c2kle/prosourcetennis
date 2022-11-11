import React from 'react'
import '../componentStyles/teamIntro.css'

export default function TeamIntro(props) {

    const onClickHandler = () => {
        props.setDisplayProfiles("true")
      }

  return (
    <div className="teamIntro-wrapper">
    <div className="teamIntro-wrapper_section">
        <h1 className="teamIntro-wrapper_section_h1">OUR TEAM</h1>
        <p className="teamIntro-wrapper_section_p">Consultants at Pro Source Tennis have a strict performance criteria that has to be met before consideration
        to join the team. Currently, this elite standard is to have won an ITF professional title and/or competed at the #1 position
        of an elite D1 university program.</p>
        <button className="teamIntro-wrapper_section_button" onClick={onClickHandler}>Meet The Team</button>
    </div>
</div>
  )
}
