import './App.css';
import Container from './parentContainer/Container';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  console.log(document.getElementsByTagName("body")[0])
  console.log(document.getElementById("root"))
  // const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  document.getElementsByTagName("body")[0].style.height = `${window.innerHeight}px`
  document.getElementsByTagName("body")[0].style.width = `${window.innerWidth}px`
  document.getElementById("root").style.height = `${window.innerHeight}px`
  document.getElementById("root").style.width = `${window.innerWidth}px`

  
  window.addEventListener('resize', () => {
    document.getElementsByTagName("body")[0].style.height = `${window.innerHeight}px`
    document.getElementById("root").style.height = `${window.innerHeight}px`
  })

  window.addEventListener('resize', () => {
    document.getElementsByTagName("body")[0].style.width = `${window.innerWidth}px`
    document.getElementById("root").style.width = `${window.innerWidth}px`
  })


  window.addEventListener('orientationchange', () => {
    document.getElementsByTagName("body")[0].style.height = `${window.innerHeight}px`
    document.getElementById("root").style.height = `${window.innerHeight}px`
  })

  window.addEventListener('orientationchange', () => {
    document.getElementsByTagName("body")[0].style.width = `${window.innerWidth}px`
    document.getElementById("root").style.width = `${window.innerWidth}px`
  })

  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Container/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
