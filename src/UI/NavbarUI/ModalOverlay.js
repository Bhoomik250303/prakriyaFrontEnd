import React from "react";
import classes from "./ModalOverlay.module.css"
import  ReactDOM  from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";

const ModalOverlay = (props) => {

    const clickHandler = () => {
        props.closeModal();
    }



    return (
        <>
            {ReactDOM.createPortal(<CSSTransition
                mountOnEnter
                unmountOnExit
                appear={true}
                in={props.show}
                timeout={500}
                classNames={{
                    enter: classes.MyClassEnter,
                    enterActive: classes.MyClassEnterActive,
                    enterDone: classes.MyClassEnterDone,
                    exit: classes.MyClassExit,
                    exitActive: classes.MyClassExitActive,
                    exitDone: classes.MyClassExitDone
                }}>
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
            </CSSTransition>,document.getElementById("modalOverlay"))}


        </>
    )
}

export default ModalOverlay