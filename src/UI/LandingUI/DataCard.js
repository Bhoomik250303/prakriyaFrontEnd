import React,{useState} from "react";
import classes from "./DataCard.module.css"
import { CSSTransition } from "react-transition-group";
const DataCard = ()=>{

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
                        <div className={classes.Heading}></div>
                        <div className={classes.Para}></div>
                    </div>
                </CSSTransition>
            </div>
        </>
    )
}

export default DataCard