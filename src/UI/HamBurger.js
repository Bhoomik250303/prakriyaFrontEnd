import React,{useEffect, useState} from "react";
import classes from "./Hamburger.module.css"


const HamBurger = (props) => {

    // const[toggle,setToggle] = useState(false);
    // console.log("function ran")
   
    // useEffect(()=>{
    //     props.handleModal(toggle)
    // },[toggle])

    const clickHandler = ()=>{
        // setToggle(true)
        props.handleModal()
        // setToggle((prev)=>{
        //     if(prev){
        //         return false
        //     }
        //     if(!prev){
        //         return true
        //     }

        //     })
        // if(props.bool){
        //     props.handleModal(true)
        //     return
        // }
        // if(props.bool){
        //     props.handleModal(false)
        //     return
        // }
    }
    

    return (
        <>  
            
            <div className={classes.container} onClick={clickHandler}  >
                <div className={classes.bar1}></div>
                <div className={classes.bar2}></div>
                <div className={classes.bar3}></div>
            </div>
        </>
    )
}

export default React.memo(HamBurger)