import React from "react";
import classes from "./TeamPrakriya.module.css"
import logo from "../Assets/ImageAssets/mainLogo.png"
import teamMembers from "../Assets/TextAssets/teamMembers";
import GoToTop from "../Hooks/goToTop.js"
const TeamPrakriya = () => {

    return (
        <>
            <GoToTop/>
            <div id="teamPrakriya" className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.mainTitle}><span>Team </span>Prakriya</div>
                        {
                            teamMembers.map((e)=>{
                                return (<div className={classes.teamContainer}>
                                    <div className={classes.teamImage}>
                                            <img src={logo} alt=" "></img>
                                    </div>
                                    <div className={classes.teamData}>
                                            <div className={classes.dataContainer}>
                                                <div className={classes.subTitle}>
                                                    {e.title}
                                                </div>
                                                <div className={classes.description}>
                                                       {e.desc}
                                                </div>
                                            </div>
                                    </div>
                                </div>)
                            })
                        }


                </div>
                
            </div>

        </>
    )

}

export default TeamPrakriya

