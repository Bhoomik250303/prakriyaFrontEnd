import React,{useState} from "react";
import classes from "./DataCard.module.css"
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
                
                {dataShow&&<div className={`${classes.showModal} ${classes.transition}`}>
                    <div className={classes.Heading}></div>
                    <div className={classes.Para}></div>
                </div>}
            </div>
        </>
    )
}

export default DataCard