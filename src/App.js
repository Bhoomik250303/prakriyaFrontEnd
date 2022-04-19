import React from 'react';
import Landing from './Pages/Landing';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar />
            <Routes>
              <Route exact path="/" element={<Landing/>}></Route>
              <Route path="/about" element={<div>About Section</div>}></Route>
            </Routes>
      <Footer/>
    </BrowserRouter>


    </>
  );
}

export default App;
