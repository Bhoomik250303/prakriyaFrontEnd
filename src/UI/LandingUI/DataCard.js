import React,{useState, useRef, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./DataCard.module.css"
import { CSSTransition } from "react-transition-group";
import dataCardBg from "../../Assets/ImageAssets/Section2/approachBox-01.png"
import approachText from "../../Assets/TextAssets/approachText.js"
const DataCard = (props)=>{
    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
      })
    // console.log("function ran")
    const[dataShow,setDataShow]= useState(false);
    const dataCardRef = useRef ();

    const Enterhandler = ()=>{
        // console.log("mouse enetered")
        setDataShow(true);
    }
    const leaveHandler = ()=>{
        // console.log("mouse left")
        setDataShow(false);
    }

    const clickHandler = ()=>{
        dataShow ? setDataShow(false) : setDataShow(true) ;
    }


    useEffect(()=>{
        if(!isMobile)return;
        const obsCallback = (entries, observer)=>{
            // console.log(entries[0].isIntersecting);
            if(entries[0].isIntersecting){
                setDataShow(true);
            }else{
                setDataShow(false);
            }
        }
    
        const obsOptions = {
            root: null,
            threshold :1
        }
    
        const observer = new IntersectionObserver (obsCallback, obsOptions);
        observer.observe(dataCardRef.current)
    },[])

    

    return(
        <>
            <div ref={dataCardRef} className={classes.cardContainer} onMouseEnter={Enterhandler} onClick={clickHandler} onMouseLeave={leaveHandler} >
                <div className={classes.dataCardBg}>
                    <img src={dataCardBg} alt=" "></img>
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