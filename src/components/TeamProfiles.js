import React from 'react'
import '../componentStyles/teamProfiles.css'

export default function TeamProfiles(props) {

    const onClickHandler = () => {
        props.setDisplayProfiles("false")
    }

    return (
        <div className="team-profiles-wrapper">
            <div className="team-profiles-wrapper_body">
                <div className="team-profiles-wrapper_body_section">
                    <div className="team-profiles-wrapper_body_section_h1">ATP #355</div>
                    <div className="team-profiles-wrapper_body_section_h1">3 Men's ITF Pro Titles (2S, 1D)</div>
                    <div className="team-profiles-wrapper_body_section_h1">3 x Junior Grandslam Competitor</div>
                    <div name="ashley-hewitt" className="team-profiles-wrapper_body_section_profle"></div>
                    <button className="team-profiles-wrapper_body_section_button" >Bio: Ashley Hewitt</button>
                </div>

                <div className="team-profiles-wrapper_body_section">
                    <div className="team-profiles-wrapper_body_section_h1">Duke University #1</div>
                    <div className="team-profiles-wrapper_body_section_h1">NCAA Finalist</div>
                    <div className="team-profiles-wrapper_body_section_h1">Junior Grandslam Competitor</div>
                    <div name="nick-stachowiak" className="team-profiles-wrapper_body_section_profle"></div>
                    <button className="team-profiles-wrapper_body_section_button" >Bio: Nick Stachowiak</button>
                </div>

                <div className="team-profiles-wrapper_body_section">
                    <div className="team-profiles-wrapper_body_section_h1">ATP #464</div>
                    <div className="team-profiles-wrapper_body_section_h1">5 Men's ITF Pro Titles (1S, 4D)</div>
                    <div className="team-profiles-wrapper_body_section_h1">Northwestern University #1</div>
                    <div name="strong-kirchheimer" className="team-profiles-wrapper_body_section_profle"></div>
                    <button className="team-profiles-wrapper_body_section_button" >Bio: Strong Kirchheimer</button>
                </div>
                
            </div>
            <div className="team-profiles-wrapper_footer">
                <div className="team-profiles-wrapper_footer_nav-button" onClick={onClickHandler}>Hide</div>
            </div>
        </div>
    )
}
