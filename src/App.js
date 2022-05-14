import React, { useState } from 'react';
import Landing from './Pages/Landing';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'

import Footer from './Components/Footer/Footer';
import About from './Pages/About';
// import GoToTop from './Hooks/goToTop';
import TeamPrakriya from './Pages/TeamPrakriya';
import InfluencerRegistration from './Pages/InfluencerRegistration';

const App = () => {
  const[navWidth,setNavWidth]=useState(false);
  const[transparent,setTransparent] = useState(false);
  const navWidthHandler=(bool)=>{
    setNavWidth(bool);
  }
  const transparentNav = (bool)=>{
    // console.log(bool)
    setTransparent(bool)
  }


  return (
    <>
    
    
      <Navbar navWidth={navWidth}  transparent={transparent}/>
            {/* <GoToTop></GoToTop> */}
            <Routes>
              <Route exact path="/" element={<Landing navWidthHandler={navWidthHandler} transparentNav={transparentNav}/>} ></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/teamPrakriya" element={<TeamPrakriya></TeamPrakriya>}></Route>
              <Route path="/InfluencerRegistration" element={<InfluencerRegistration></InfluencerRegistration>}></Route>
            </Routes>
      <Footer/>
  


    </>
  );
}

export default App;
