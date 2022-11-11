import React, {useState} from 'react'
import '../pageStyles/team.css'
import TeamIntro from '../components/TeamIntro'
import TeamProfiles from '../components/TeamProfiles'

export default function Team() {

  const [displayProfiles, setDisplayProfiles] = useState("false")

  let pageContent = <TeamIntro setDisplayProfiles={setDisplayProfiles}/>;

  if(displayProfiles === "true") {
    pageContent = <TeamProfiles setDisplayProfiles={setDisplayProfiles}/>
  }

  return (
    <div id="team" className="team">
      {pageContent}
    </div>
  )
}
