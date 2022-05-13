import BgImage from "../../Assets/LandingBG/homebg.svg"
import React, { useEffect } from "react"
import { useState } from "react"
import classes from "./Section1.module.css"
import { useRef } from "react"

const Section1 = (props) => {
  const section1 = useRef(null);
  const  [bool, setBool] = useState(false) 
  useEffect(()=>{
   
    console.log(section1)
  
    const callback = (entries, observer)=>{
      // console.log(entries[0].isIntersecting)
      props.transparentNav(entries[0].isIntersecting)
    }
  
    const observer = new IntersectionObserver(callback, {
      root:null,
      threshold:0.1
    })
    observer.observe(section1.current)
  },[])

 



  return (
    <>
      < div className={classes.container} id='home' ref={section1}>

        {/* <img className={classes.prakriyaMan} src={prakriyaMan2}></img> */}

        <img className={classes.BgImage} ></img>
        <div className={classes.frontText}>
          <div className={classes.frontTextTop}>
            <div className={classes.frontTextTopLeft}>
              The Caffeine
            </div>
            <div className={classes.frontTextTopRight}>
              <div className={classes.frontTextTopRightContent}> FOR YOUR </div>
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

    </>
  )

}

export default Section1