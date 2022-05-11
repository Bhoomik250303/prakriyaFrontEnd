import BgImage from "../../Assets/LandingBG/homebg.svg"
import React from "react"
import classes from "./Section1.module.css"
import prakriyaMan2 from "../../Assets/LandingBG/prakriyaman.svg"

const Section1 = () => {
  return (
    <>
      < div className={classes.container} id='home'>

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