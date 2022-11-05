import React from 'react'
import '../pageStyles/landing.css'


export default function Landing(props) {

  let landingVideoSource = 'landingVideoWhole.mp4'

  if (window.screen.availWidth < 700) {
    landingVideoSource = 'landingVideo.mp4'
  }



  const onClickHandler = () => {

    props.setLanded(true)

  }


  return (
    <div className="landing">
      <div className="landing_body" onClick={onClickHandler}>
        <video className="landing_video" autoPlay muted>
          <source src={landingVideoSource} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}
