import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Psychometric from './Psychometric';
import WordPuzzle from './WordPuzzle';
import MathPuzzle from './MathPuzzle';
import Footer from './Footer';

export default function App() {






    return (
        <>


            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/psychometric" element={<Psychometric />} />
                </Routes>
            </BrowserRouter>
            {/* <Home/>
      <Psychometric/> */}

            <Footer/>


        </>

    );

}