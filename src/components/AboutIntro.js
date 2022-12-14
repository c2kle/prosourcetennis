import React from 'react'
import '../componentStyles/aboutIntro.css'

export default function AboutIntro() {
    return (
        <div className="aboutIntro-wrapper">
            <div className="aboutIntro-wrapper_section">
                <h1 className="aboutIntro-wrapper_section_h1">ABOUT US</h1>
                <p className="aboutIntro-wrapper_section_p">We are a conglomerate of elite performing tennis consultants that have a vast knowledge base on all things in the tennis world. Whether you are a player, parent, or coach, you will find our experience
                    and expertise an advantage for your or your player's tennis performace. Our consultants have won thousands of tennis matches and understand the realities of competition including pressure, expectations, and performance. </p>
                <button className="aboutIntro-wrapper_section_button" >Learn More</button>
            </div>
        </div>
    )
}
