import React from "react";
import classes from "./WhoWeAre.module.css"
import avatar from "../../Assets/ImageAssets/WhoWeAre/whoWeAre.svg"

const WhoWeAre = ()=>{
    return(
        <>
            <div className={classes.mainContainer}>
                
                <div className={classes.container}>
                       <div className={classes.title}>
                            <div className={classes.title_main}><span>Who</span> we are</div>
                            <div className={classes.title_sub}>
                                Prakriya is a digital marketing agency that acts as a platform for influencers and companies to collaborate on new initiatives.
                            </div>
                       </div>
                       <div className={classes.text}>
                            <div className={classes.image}>
                                <img src={avatar}></img>
                            </div>
                            <div className={classes.textContainer}>
                            Understanding your core business model and your vision of a successful organization are vital for us to provide a full range of comprehensive digital marketing solution that strikes the perfect balance between innovation, viability and crystal clear communication on and off the internet; the key ingredient to empower your company with the flexibility it needs to thrive in today's fiercely competitive onine business world.
                            </div>
                            
                       </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre;