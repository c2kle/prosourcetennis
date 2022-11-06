import React from 'react'
import '../pageStyles/about.css'

export default function About() {
  return (
    <div id="about" className="about">
      <div style={{ fontFamily: "Be Vietnam Pro",clipPath: "circle()", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,.7)", height: "90%", width:"90%", color: "whitesmoke"}}>        <h1 style={{fontSize: "40px",color: "whitesmoke"}}>ABOUT US</h1>
        {/* <p style={{color: "whitesmoke"}}>We are an elite tennis consulting firm. Here to bring players of all levels guidance, direction, and insights.</p>*/}</div> 

    </div>
  )
}
