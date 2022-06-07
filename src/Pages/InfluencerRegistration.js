import React from "react";
import { useState, useRef, useEffect } from "react";
import classes from "./InfluencerRegistration.module.css"
import Button from "../Components/Button";
import GoToTop from "../Hooks/goToTop";
import infuencer from "../Assets/ImageAssets/influencerRegistration/influencerillustration-01.svg"
import {db} from '../firebase'
import { collection , addDoc } from "firebase/firestore";

const InfluencerRegistration = () => {

    const [spinner, setSpinner] = useState(false)
    const illustrationRef = useRef();
    const formContainerRef = useRef();




    const submitHandler = async (e) => {
        setSpinner(true);
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const city = data.get('city');
        const message = data.get('message')
        const dataa = {name,email,number,city,message,dateTime : Date().toLocaleString().split(" GMT+")[0],}

        try{
            await addDoc(collection(db,'influencer registration'),dataa)
        }catch(error){
            alert(error)
        }

        const header = new Headers()

        header.append("Content-Type", "application/json")

        const raw = JSON.stringify(dataa)
        try {
            const response = await fetch("https://prakriyamailservice.herokuapp.com/InfluencerRegistration", {
                method: 'POST',
                body: raw,
                headers: header


            })
            const responsedata = await response.json();
            if (responsedata.message === 'Success') {
                alert('Message sent Successfully! ✉️')
            } else {
                alert("A problem Occured ❌")
            }
            setSpinner(false);
        } catch (error) {
            setSpinner(false)
        }


    }

    useEffect(()=>{
        
        const obsCallback = (entries, observer)=>{
            // console.log(entries[0].isIntersecting);
            if(entries[0].isIntersecting){
                // console.log(entries[0]);
            
                illustrationRef.current.classList.remove(classes['temp'])
                
                // containerRef.current.classList.add(classes['unTemp'])
                observer.unobserve(formContainerRef.current)
            }
        }
    
        const obsOptions = {
            root: null,
            threshold :0.5
        }
    
        const observer = new IntersectionObserver (obsCallback, obsOptions);
        observer.observe(formContainerRef.current)
    },[])





    return (
        <>
            <GoToTop />
            <div className={classes.container}>
                <div className={classes.mainContainer}>
                    <div className={classes.title}>
                        influencer marketing <span>registration</span>
                    </div>
                    <div className={classes.subText}>
                        <div className={classes.subHead}>
                            <b>EARN WITH YOUR EXPERTISE</b>
                        </div>
                        <div className={classes.subPara1}>
                            To become an Influencer, you may charge what you want and make money doing what you love – whether that means creating inspiring videos, posting inspirational photographs, writing witty captions – or just being yourself.
                        </div>
                        <div className={classes.subPara2}>
                            <div>✔ Be Your Own Boss</div>
                            <div>✔ Get Popular On Social Media</div>
                            <div>✔ Prosper Professionally</div>
                        </div>
                        <div className={classes.subPara3}>
                            We will Help you find the right Brands!
                        </div>
                    </div>
                    <div className={classes.mainFormContainer} ref={formContainerRef}>
                        <div className={classes.formContainer}>
                            <div className={classes.formInnerContainer}>
                                <div className={classes.subHead}>
                                    <b>Register as an Influencer</b>
                                </div>
                                <form className={classes.mainForm} autoComplete="off" onSubmit={submitHandler}  >
                                    <label>Full Name</label>
                                    <input required type="text" name="name"></input>
                                    <label>E-Mail</label>
                                    <input required type="email" name="email"></input>
                                    <label>City</label>
                                    <input required type="text" name="city"></input>

                                    <label>Contact Number</label>
                                    <input required type="tel" name="number"></input>
                                    <label>Primary Social Media Links</label>
                                    <textarea required className={classes.message} maxLength="750" name="message" cols="40" rows="5"></textarea>
                                    <Button spinner={spinner} ></Button>
                                </form>
                            </div>

                        </div>
                        <div className={`${classes.illustration} ${classes.temp}`} ref={illustrationRef}>
                                <img src={infuencer} alt=" "></img>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}


export default InfluencerRegistration
