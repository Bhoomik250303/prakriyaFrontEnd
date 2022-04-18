import React from "react";
import classes from "./ModalOverlay.module.css"
const ModalOverlay=(props)=>{

    const clickHandler=()=>{
        props.closeModal();
    }



    return(
        <>
            <div className={classes.modalOverlay}>
                <div className={classes.closeModal}>
                    <div className={classes.closeButton} onClick={clickHandler}>
                       
                            <div className={classes.bar1}></div>
                            <div className={classes.bar2}></div>
                            <div className={classes.bar3}></div>
                        
                        
                    </div>
                </div>
                <div className={classes.options}></div>
                <div className={classes.contactUs}></div>
            </div>
        </>
    )
}

export default ModalOverlay