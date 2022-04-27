import React, { useState, useRef, useEffect } from 'react';
import classes from "./Landing.module.css"
import { useMediaQuery } from 'react-responsive'
import DataCard from '../UI/LandingUI/DataCard';
import GridCard from '../UI/LandingUI/GridCard';
import { CSSTransition } from 'react-transition-group';
import CardModal from '../UI/LandingUI/CardModal';
import Slider from '../UI/LandingUI/Slider';
import useScrollBlock from '../Hooks/useScrollBlock';
import BgImage from "../Assets/LandingBG/homebg.png"
import prakriyaMan from "../Assets/LandingBG/prakriyaMan.png"
import prakriyaMan2 from "../Assets/LandingBG/prakriyaman.svg"
const Landing = (props) => {

  
  
  const [blockScroll, allowScroll] = useScrollBlock();
  

  const container = useRef();
  const scrollContainer = useRef();
  const circle = useRef();

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
 const onWheel=(e)=>{
  let count = 0;
  // if(count === 0){
  //   circle.current.children[1].classList.remove(classes.circleTransform)
  //   circle.current.children[0].classList.add(classes.circleTransform)
    
  //  }
   console.log(e.deltaY)
  //  console.log(scrollContainer);
  //  console.log(window.pageYOffset)
  // console.log(scrollContainer.current.scrollLeft += e.deltaY*2000)
  
  
   scrollContainer.current.scrollLeft += e.deltaY*2000;
 
   
   if(e.deltaY > 0){
    circle.current.children[1].classList.add(classes.circleTransform)
    circle.current.children[0].classList.remove(classes.circleTransform)
    return;
   }
   if(e.deltaY < 0){
    circle.current.children[1].classList.remove(classes.circleTransform)
    circle.current.children[0].classList.add(classes.circleTransform)
   }
   
  
  

  
   scrollContainer.current.classList.add(classes.setPos)
 }

 const mouseOnClient = ()=>{
   if(isMobile){
      blockScroll();
      props.navWidthHandler(true);
   }
   
   
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
      </div>
     

      <div id='content2' className={classes.Data}>
        <div className={classes.DataContainer}>
          <DataCard className={classes.temp}></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          
        </div>
      </div>
  
      {isMobile&&<div className={classes.Data2}>
        
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
          {/* {bool&& <CardModal dim = {dim} data={cardModalData} setboolean={CardModalBoolHandelr}></CardModal>} */}
            
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
                    
                    <GridCard bool={handleBool} data={'image1'}></GridCard>

                    <GridCard bool={handleBool} data={'image2'}></GridCard>
                    <GridCard bool={handleBool} data={'image3'}></GridCard>
                    <GridCard bool={handleBool} data={'image4'}></GridCard>
                    <GridCard bool={handleBool} data={'image5'}></GridCard>
                    <GridCard bool={handleBool} data={'image6'}></GridCard>
                    <GridCard bool={handleBool} data={'image7'}></GridCard>
                    <GridCard bool={handleBool} data={'image8'}></GridCard>
                    <GridCard bool={handleBool} data={'image9'}></GridCard>
                    <GridCard bool={handleBool} data={'image10'}></GridCard>


                </div>


            </CSSTransition>  

          {/* {!bool&&<div className={classes.gridContainer} ref={container}>
          
            <GridCard bool={handleBool} data={'1'}>1</GridCard>

            <GridCard bool={handleBool} data={'2'}>2</GridCard>
            <GridCard bool={handleBool} data={'3'}>3</GridCard>
            <GridCard bool={handleBool} data={'4'}>4</GridCard>
            <GridCard bool={handleBool} data={'5'}>5</GridCard>
            <GridCard bool={handleBool} data={'6'}>6</GridCard>
            <GridCard bool={handleBool} data={'7'}>7</GridCard>
            <GridCard bool={handleBool} data={'8'}>8</GridCard>
            <GridCard bool={handleBool} data={'9'}>9</GridCard>
            <GridCard bool={handleBool} data={'10'}>10</GridCard>


          </div>} */}
         
        
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

     
      <div className={classes.bodyForClient}  >
 
        <div className={classes.containerForClient} onWheel={onWheel}  ref={scrollContainer} onMouseEnter={mouseOnClient} onMouseLeave={()=>{allowScroll()}} > 
          
            <div className={classes.contentForClient}></div>
            <div className={classes.contentForClient} style={{background:'green'}}></div>
            <div className={classes.contentForClient}></div>
            <div className={classes.contentForClient} style={{background:'green'}}></div>
            <div className={classes.contentForClient}></div>
            
            <div className={classes.contentForClient} style={{background:'green'}}></div>
         
           
         
           
        </div> 
        
        <div className={classes.clientDot} ref={circle}>
                <div className={`${classes.clientDotCircle1} ${classes.circleTransform}`}> </div>
                <div className={classes.clientDotCircle1}> </div>
        </div>
  
    
        
        
      </div>
         


    </>
  );
}

export default Landing;