import './App.css';
import Container from './parentContainer/Container';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Container/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
