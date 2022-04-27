import React, { useState } from 'react';
import Landing from './Pages/Landing';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';

const App = () => {
  const[navWidth,setNavWidth]=useState(false);

  const navWidthHandler=(bool)=>{
    setNavWidth(bool);
  }

  return (
    <>
    <BrowserRouter>
      <Navbar navWidth={navWidth} />
            <Routes>
              <Route exact path="/" element={<Landing navWidthHandler={navWidthHandler}/>}></Route>
              <Route path="/about" element={<div>About Section</div>}></Route>
            </Routes>
      <Footer/>
    </BrowserRouter>


    </>
  );
}

export default App;
