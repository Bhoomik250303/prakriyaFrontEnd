import React from "react";
import classes from "./ModalOverlay.module.css"
import ReactDOM from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import facebook from "../../Assets/ImageAssets/Footer/facebook.png"
import twitter from "../../Assets/ImageAssets/Footer/twitter.png"
import instagram from "../../Assets/ImageAssets/Footer/instagram.png"
import linkedin from "../../Assets/ImageAssets/Footer/linkedin.png"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
                    <div className={classes.options}>

                        <div className={classes.optionsStyle}>
                            <div className={classes.textStyle} onClick={clickHandler}><span><Link to="/">HOME</Link></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><a>Blogs</a></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><HashLink to="about">About Us</HashLink></span></div>
                            
                            <div className={classes.textStyle} onClick={clickHandler}><span><HashLink to="/#services">Our Services</HashLink></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><HashLink to="/#approach">Our Approach</HashLink></span></div>
                            
                            <div className={classes.textStyle} onClick={clickHandler}><span><HashLink to="/#clients">Our Clients</HashLink></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><Link to="InfluencerRegistration"> Influencer Registration</Link></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><HashLink to="/#contactUs">Contact Us</HashLink></span></div>
                            <div className={classes.textStyle} onClick={clickHandler}><span><Link to="teamPrakriya">Team Prakriya</Link></span></div>

                        </div>


                    </div>
                    <div className={classes.contactUs}>
                        <div className={classes.wrapper}>
                            <div className={classes.contactUs_text}>
                                <div className={classes.contactUs_text_title}>
                                    Get in touch
                                </div >
                                <div className={classes.contactUs_text_subTitle}>
                                Shop number 24, Prakriya Digital, Sonam Pushpanjali, Golden Nest Phase-3, Mira Bhayander road (East). Thane: 401107
                                </div>
                            </div>
                            <div className={classes.contactUs_image}>
                                    <div><a href="https://www.facebook.com/prakriyadigital" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""  /></a></div>
                                    <div><a href="https://www.instagram.com/prakriyadigital/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""/></a></div>
                                    <div><a href="https://www.linkedin.com/company/prakriya/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=" "></img></a></div>
                                    <div><a href="https://twitter.com/DigitalPrakriya?t=Tt2GOZAC1MAWjVKaXaUuLw&s=08" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=" "></img></a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </CSSTransition>, document.getElementById("modalOverlay"))}


        </>
    )
}

export default ModalOverlay