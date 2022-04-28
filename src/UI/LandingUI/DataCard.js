import React,{useState} from "react";
import classes from "./DataCard.module.css"
import { CSSTransition } from "react-transition-group";
import dataCardBg from "../../Assets/ImageAssets/Section2/approachBox-01.png"
import approachText from "../../Assets/TextAssets/approachText.js"
const DataCard = (props)=>{

    console.log("function ran")
    const[dataShow,setDataShow]= useState(false);

    const Enterhandler = ()=>{
        console.log("mouse enetered")
        setDataShow(true);
    }
    const leaveHandler = ()=>{
        console.log("mouse left")
        setDataShow(false);
    }

    return(
        <>
            <div className={classes.cardContainer} onMouseEnter={Enterhandler} onMouseLeave={leaveHandler}>
                <div className={classes.dataCardBg}>
                    <img src={dataCardBg}></img>
                </div>
                <div className={classes.dataCardTitle}>{props.title}</div>
                {/* {dataShow&&<div className={`${classes.showModal} ${classes.transition}`}>
                    <div className={classes.Heading}></div>
                    <div className={classes.Para}></div>
                </div>} */}
                <CSSTransition
                mountOnEnter
                unmountOnExit
                in={dataShow}
                timeout={1000}
                classNames={{
                    
                        enter:classes.MyClassEnter,
                        enterActive:classes.MyClassEnterActive,
                        enterDone:classes.MyClassEnterDone,
                        exit:classes.MyClassExit,
                        exitActive: classes.MyClassExitActive,
                        exitDone: classes.MyClassExitDone
                    
                }}>
                    <div className={`${classes.showModal}`}>
                        <div className={classes.Heading}><div>{props.title}</div></div>
                        <div className={classes.Para}>{approachText[`${props.title}`].text}</div>
                    </div>
                </CSSTransition>


            </div>
        </>
    )
}

export default DataCard