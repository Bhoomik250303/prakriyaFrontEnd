import React, { useState } from 'react';
import Landing from './Pages/Landing';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import GoToTop from './Hooks/goToTop';

const App = () => {
  const[navWidth,setNavWidth]=useState(false);

  const navWidthHandler=(bool)=>{
    setNavWidth(bool);
  }
  // const location = useLocation();
  // // Scroll to top if path changes
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <>
    
    
      <Navbar navWidth={navWidth} />
            {/* <GoToTop></GoToTop> */}
            <Routes>
              <Route exact path="/" element={<Landing navWidthHandler={navWidthHandler}/>}></Route>
              <Route path="/about" element={<About></About>}></Route>
            </Routes>
      <Footer/>
  


    </>
  );
}

export default App;
