import React, { useState, useRef, useEffect } from 'react';
import classes from "./Landing.module.css"
import { useMediaQuery } from 'react-responsive'
import DataCard from '../UI/LandingUI/DataCard';
import GridCard from '../UI/LandingUI/GridCard';
import { CSSTransition } from 'react-transition-group';
import CardModal from '../UI/LandingUI/CardModal';
import Slider from '../UI/LandingUI/Slider';
import ClientSection from '../UI/LandingUI/ClientSection';
import BgImage from "../Assets/LandingBG/homebg.png"
import prakriyaMan from "../Assets/LandingBG/prakriyaMan.png"
import prakriyaMan2 from "../Assets/LandingBG/prakriyaman.svg"
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
 





  return (
    <>

      <div className={classes.container}>
        
      <img className={classes.prakriyaMan} src={prakriyaMan2}></img>
      
        <img className={classes.BgImage} src={BgImage}></img>
        <div className={classes.frontText}>
          <div className={classes.frontTextTop}>
              <div className={classes.frontTextTopLeft}>
                The Caffeine
              </div>
              <div className={classes.frontTextTopRight}>
                <div className={classes.frontTextTopRightContent}> For your </div>
              </div>
          </div>
          <div className={classes.frontTextBottom}>
                <span>B</span>
                <span>U</span>
                <span>S</span>
                <span>I</span>
                <span>N</span>
                <span>E</span>
                <span>S</span>
                <span>S</span>
          </div>
          
        </div>
        <div className={classes.bottomText}>
            <div className={classes.bottomTextTop}>
                Starting a business is one thing while growing it is another.
            </div>
            <div className={classes.bottomTextBottom}>
                This is where <span>prakriya</span>  comes into the picture.
            </div>
        </div>
      </div>
     

 
  
      {isMobile&&<div className={classes.Data2}>
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

      <div id='content2' className={classes.Data}>
        <div className={classes.DataContainer}>
          <DataCard title={"ANALYZE"}></DataCard>
          <DataCard title={"FORMULATE"}></DataCard>
          <DataCard title={"IMPLEMENT"}></DataCard>
          <DataCard title={"AUGMENT"}></DataCard>
          
        </div>
      </div>

     <ClientSection navWidthHandler={props.navWidthHandler} isMobile={isMobile}></ClientSection>
    
         


    </>
  );
}

export default Landing;