import React from "react";
import classes from "./GridCard.module.css"
const GridCard = (props)=>{

    const clickHandler=()=>{
        props.bool(true,props.data)
      
    }

    return(
        <>
            <div onClick={clickHandler} className={classes.square}>{props.data}</div>
        </>
    )
}

export default GridCard