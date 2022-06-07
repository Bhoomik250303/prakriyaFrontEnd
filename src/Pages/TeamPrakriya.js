import React, { useEffect, useState } from "react";
import {collection, query, orderBy, onSnapshot, where, FieldValue, getDoc, getDocs} from "firebase/firestore"
import {db} from '../firebase'
import classes from "./TeamPrakriya.module.css"
import logo from "../Assets/ImageAssets/mainLogo.png"
// import teamMembers from "../Assets/TextAssets/teamMembers";
import GoToTop from "../Hooks/goToTop.js"



const TeamPrakriya = () => {

    const [teamMembers,setTeamMembers] = useState([])
    const [isTeamEmpty,setIsHiring] = useState(true)
    useEffect(()=>{
        const tempTeamMembers = []
        const q = query(collection(db,'team members'),orderBy('index','asc'))
        getDocs(q).then((querySnapshot)=>{
            querySnapshot.docs.map((e)=>{
                tempTeamMembers.push(e)
            })
            setTeamMembers(tempTeamMembers)
            setIsHiring(false)
        })
    },[])

    const sortingIndexWise = () => {
        teamMembers.sort((a,b)=>{
            return a.data().index < b.data().index ? a.data().index : b.data().index;
        })
    }


    return (
        <>
            <GoToTop/>{
                isTeamEmpty &&
                <div className={classes.fakeContainer}>
                    <div className={classes.Loading}>
                        <img src={logo}></img>
                    </div>
                </div>
            }
            {
                !isTeamEmpty &&
            <div id="teamPrakriya" className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.mainTitle}><span>Team </span>Prakriya</div>
                        {
                            sortingIndexWise()
                        }
                        {
                            teamMembers.map((e)=>{
                                return (<div className={classes.teamContainer}>
                                    <div className={classes.teamImage}>
                                            <img src={e.data().profileImageUrl} alt=" "></img>
                                    </div>
                                    <div className={classes.teamData}>
                                            <div className={classes.dataContainer}>
                                                <div className={classes.subTitle}>
                                                    {e.data().displayName + ' : ' + e.data().title}
                                                </div>
                                                <div className={classes.description}>
                                                       {e.data().description}
                                                </div>
                                            </div>
                                    </div>
                                </div>)
                            })
                        }


                </div>
                
            </div>
            }
        </>
    )

}

export default TeamPrakriya

