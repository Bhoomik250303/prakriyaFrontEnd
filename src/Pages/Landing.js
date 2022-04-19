import React, { useState, useRef, useEffect } from 'react';
import classes from "./Landing.module.css"
import Navbar from '../Components/Navbar/Navbar.js';
import DataCard from '../UI/LandingUI/DataCard';
import GridCard from '../UI/LandingUI/GridCard';
import { CSSTransition } from 'react-transition-group';
import CardModal from '../UI/LandingUI/CardModal';
const Landing = () => {

  const container = useRef();
  const [dim, setDim] = useState({})
  const [bool, setbool] = useState(false)
  const [cardModalData, setCardModalData] = useState('')
  const [temp, settemp] = useState(false)

  useEffect(() => {
    
    if (dim.height === container.current.clientHeight && dim.width === container.current.clientWidth)
      return
    // console.log(container.current.clientHeight)
    // console.log(container.current.clientWidth)
    setDim({ height: container.current.clientHeight, width: container.current.clientWidth })

    window.addEventListener('resize',(e)=>{
        
        if(!container.current?.clientHeight){
          return
        }
        console.log(container)
        setDim({ height: container.current.clientHeight, width: container.current.clientWidth })
      })
       

  }, [])

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


  return (
    <>

      <div className={classes.container}>
        
      </div>


      <div className={classes.Data}>
        <div className={classes.DataContainer}>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          
        </div>
      </div>

      <div className={classes.Data2}>
        
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
        
      </div>



    </>
  );
}

export default Landing;