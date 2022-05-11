import React, { useState, useRef, useEffect } from 'react';
import classes from "./Landing.module.css"
import { useMediaQuery } from 'react-responsive'
import DataCard from '../UI/LandingUI/DataCard';
import GridCard from '../UI/LandingUI/GridCard';
import { CSSTransition } from 'react-transition-group';
import CardModal from '../UI/LandingUI/CardModal';
import Slider from '../UI/LandingUI/Slider';
import ClientSection from '../UI/LandingUI/ClientSection';
import Section1 from '../UI/LandingUI/Section1';
import Navbar from '../Components/Navbar/Navbar';
import approachImg from "../Assets/ImageAssets/Approach/approach.svg"
import WhoWeAre from '../UI/LandingUI/WhoWeAre';
import Careers from '../UI/LandingUI/Careers';
import ContactUs from '../UI/LandingUI/ContactUs';

const Landing = (props) => {

  
  
  

  const container = useRef();
  
  

  const [dim, setDim] = useState({})
  const [bool, setbool] = useState(false)
  const [cardModalData, setCardModalData] = useState('')
  const [navWidth, setNavWidth] = useState(false);

  const [temp, settemp] = useState(false)
  const isMobile = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const [slideModalData, setSlideModalData] = useState({data:'',bool:false})
  

  // useEffect(() => {
  //   console.log("Useeffect Ran")
  //   if (dim.height === container.current.clientHeight && dim.width === container.current.clientWidth)
  //     return
  //   // console.log(container.current.clientHeight)
  //   // console.log(container.current.clientWidth)
  //   setDim({ height: container.current.clientHeight, width: container.current.clientWidth })

  //   window.addEventListener('resize',(e)=>{
        
  //       if(!container.current?.clientHeight){
  //         return
  //       }
  //       console.log(container)
  //       setDim({ height: container.current.clientHeight, width: container.current.clientWidth })
  //     })
       

  // }, [])

  // window.addEventListener('resize',(e)=>{
  //   console.log(e)
  //   if(!container.current){
  //     return
  //   }
  //   setDim({ height: container.current.clientHeight, width: container.current.clientWidth })
  // })

  const handleBool = (bool,data)=>{
    setbool(bool)
    setCardModalData(data);
    
      settemp(bool)
    
 
   
  }
  const CardModalBoolHandelr=()=>{
    setbool(false);
    setTimeout(() => {
      settemp(false)
    }, 50);
  }

  const time={
    enter:500,
    exit:0
  }

 const sliderDataHandler=(data)=>{
   setSlideModalData(data)
 }
 const closeSlideModalOverlay=()=>{
   
    setSlideModalData({bool:false})
  
   
 }
 
 

 const navWidthHandler=(bool)=>{
   setNavWidth(bool);
   props.navWidthHandler(bool);
 }




  return (
    <>

{/*    
      <Navbar navWidth={navWidth} /> */}
      <Section1></Section1>
      <WhoWeAre></WhoWeAre>
  
      {isMobile&&<div className={classes.Data2} id="services">
        <div className={classes.data2MainTitle}><div><span>OUR</span> SERVICES</div></div>
         <CSSTransition
            mountOnEnter
            unmountOnExit
            in={bool}
            timeout={time}
            classNames={{
                
                    enter:classes.MyClassEnter,
                    enterActive:classes.MyClassEnterActive,
                    enterDone:classes.MyClassEnterDone,
                    exit:classes.MyClassExit,
                    exitActive: classes.MyClassExitActive,
                    exitDone: classes.MyClassExitDone
                
            }}>

              <CardModal dim = {dim} data={cardModalData} setboolean={CardModalBoolHandelr}></CardModal>

         </CSSTransition>
      
            
         <CSSTransition
          mountOnEnter
          unmountOnExit
          in={!temp}
          timeout={5000}
          enter={true}
          classNames={{
              
                  enter:classes.MyClass2Enter,
                  enterActive:classes.MyClass2EnterActive,
                  enterDone:classes.MyClass2EnterDone,
                  exit:classes.MyClass2Exit,
                  exitActive: classes.MyClass2ExitActive,
                  exitDone: classes.MyClass2ExitDone
                  
              
          }}> 
                <div className={classes.gridContainer} ref={container}>
                    
                    <GridCard bool={handleBool} data={'image1'} title="Social Media" ></GridCard>

                    <GridCard bool={handleBool} data={'image2'} title="Search Engine Optimization" ></GridCard>
                    <GridCard bool={handleBool} data={'image3'} title="Content Marketing" ></GridCard>
                    <GridCard bool={handleBool} data={'image4'} title="Digital PR" ></GridCard>
                    <GridCard bool={handleBool} data={'image5'} title="Brand Strategy" ></GridCard>
                    <GridCard bool={handleBool} data={'image6'} title="Paid Marketing" ></GridCard>
                    <GridCard bool={handleBool} data={'image7'} title="Analytics" ></GridCard>
                    <GridCard bool={handleBool} data={'image8'} title="Conversion Optimization" ></GridCard>
                    <GridCard bool={handleBool} data={'image9'} title="Affiliates" ></GridCard>
                    <GridCard bool={handleBool} data={'image10'} title="Influencer Marketing" ></GridCard>


                </div>


            </CSSTransition>  

       
         
        
      </div>}

      {!isMobile &&<div className={classes.Data3}>
        <div className={classes.temp}></div>
        <div className={classes.sliderContainer}>
        
         <CSSTransition
            mountOnEnter
            
            in={!slideModalData.bool}
            timeout={time}
            classNames={{
                
                    enter:classes.MyClassEnter,
                    enterActive:classes.MyClassEnterActive,
                    enterDone:classes.MyClassEnterDone,
                    exit:classes.MyClassExit,
                    exitActive: classes.MyClassExitActive,
                    exitDone: classes.MyClassExitDone
                
            }}>
              <Slider sliderDataHandler={sliderDataHandler}></Slider>
            </CSSTransition>
          

         <CSSTransition
          mountOnEnter
          unmountOnExit
          in={slideModalData.bool}
          timeout={500}
          enter={true}
          classNames={{
              
                  enter:classes.MyClass2Enter,
                  enterActive:classes.MyClass2EnterActive,
                  enterDone:classes.MyClass2EnterDone,
                  exit:classes.MyClass2Exit,
                  exitActive: classes.MyClass2ExitActive,
                  exitDone: classes.MyClass2ExitDone
                  
              
          }}>
                  <div className={classes.SlideModalOverlay}>
                    <button onClick={closeSlideModalOverlay}>X</button>
                    {slideModalData.data}
                  </div>
          </CSSTransition>
         
                  
         </div> 
        
      </div> } 

      <div id='approach' className={classes.Data}>
        <div className={classes.approach}>
            <div className={classes.approach_text}>
                <div  className={classes.approach_text_top}>
                      <span>our</span> approach
                </div>
                <div className={classes.approach_text_bottom}>
                      By adopting a four step AFIA approach, we bridge the gap between your business and your potential customers.
                </div>
            </div>
            <div className={classes.approach_image}>
                <img src={approachImg}></img>
            </div>
        </div>
        <div className={classes.DataContainer}>
          <DataCard title={"ANALYZE"}></DataCard>
          <DataCard title={"FORMULATE"}></DataCard>
          <DataCard title={"IMPLEMENT"}></DataCard>
          <DataCard title={"AUGMENT"}></DataCard>
          
        </div>
      </div>

     <ClientSection navWidthHandler={navWidthHandler} isMobile={isMobile}></ClientSection>
     <Careers></Careers>
     <ContactUs></ContactUs> 
          


    </>
  );
}

export default Landing;