import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Psychometric from './Psychometric';
import WordPuzzle from './WordPuzzle';
import MathPuzzle from './MathPuzzle';
// import {Navigate} from 'react-router-dom';

export default function App() {
  

// const [state, setState] = useState({ message: null});



  return (
    <>

      
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home state/>}/>
          <Route path="/psychometric" element={
            <>
          <Psychometric/>
          <WordPuzzle/>
          <MathPuzzle/>
          </>
          }/>
          <Route path='/dummy' element={<h1>Dummy</h1>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/>
      <Psychometric/> */}

  </>
      
  );
      
}