import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Psychometric from './Psychometric';
import WordPuzzle from './WordPuzzle';
import MathPuzzle from './MathPuzzle';

export default function App() {
  





  return (
    <>

      
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/psychometric" element={<Psychometric/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/>
      <Psychometric/> */}

  </>
      
  );
      
}