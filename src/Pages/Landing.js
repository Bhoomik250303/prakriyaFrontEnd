import React, { useState, useRef, useEffect } from 'react';
import classes from "./Landing.module.css"
import Navbar from '../Components/Navbar/Navbar.js';
import DataCard from '../UI/DataCard';
import GridCard from '../UI/GridCard';
import CardModal from '../UI/CardModa';
const Landing = () => {

  const container = useRef();
  const [dim, setDim] = useState({})
  const [bool, setbool] = useState(false)
  const [cardModalData, setCardModalData] = useState('')

  useEffect(() => {
    
    if (dim.height === container.current.clientHeight && dim.width === container.current.clientWidth)
      return
    // console.log(container.current.clientHeight)
    // console.log(container.current.clientWidth)
    setDim({ height: container.current.clientHeight, width: container.current.clientWidth })
    window.addEventListener('resize',()=>{
      if(!container.current){
        return
      }
      setDim({ height: container.current.clientHeight, width: container.current.clientWidth })
    })
    

  }, [])

  const handleBool = (bool,data)=>{
    setbool(bool)
    setCardModalData(data);
    console.log(bool)
  }
  const CardModalBoolHandelr=()=>{
    setbool(false);
  }

  return (
    <>

      <div className={classes.container}>
        <Navbar></Navbar>
      </div>


      <div className={classes.Data}>
        <div className={classes.DataContainer}>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
          <DataCard></DataCard>
        </div>
      </div>

      <div className={classes.Data2}>
        
         
          {bool&& <CardModal dim = {dim} data={cardModalData} setboolean={CardModalBoolHandelr}></CardModal>}
          {!bool&&<div className={classes.gridContainer} ref={container}>

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


          </div>}
        
      </div>



    </>
  );
}

export default Landing;