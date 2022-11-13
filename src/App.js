import './App.css';
import Container from './parentContainer/Container';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  if (window.innerHeight > window.innerWidth) {
    sessionStorage.setItem("portrait-height",window.innerHeight)
    sessionStorage.setItem("portrait-width", window.innerWidth)
  } else {
    sessionStorage.setItem("landscape-height",window.innerHeight)
    sessionStorage.setItem("landscape-width", window.innerWidth)
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Container/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
