import React, {useState} from 'react'
import Questionnaire from '../components/Questionnaire'
import HomeIntro from '../components/HomeIntro';
import '../pageStyles/home.css'

export default function Home() {

  const [displayQuestionnaire, setDisplayQuestionnaire] = useState("false")

  let pageContent = <HomeIntro setDisplayQuestionnaire={setDisplayQuestionnaire}/>;

  if(displayQuestionnaire === "true") {
    pageContent = <Questionnaire setDisplayQuestionnaire={setDisplayQuestionnaire}/>
  }

  return (
    <div id="home" className="home">
        {pageContent}
    </div>
  )
}
