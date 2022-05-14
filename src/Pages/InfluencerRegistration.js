import React from "react";
import { useState } from "react";
import classes from "./InfluencerRegistration.module.css"
import Button from "../Components/Button";
import GoToTop from "../Hooks/goToTop";
const InfluencerRegistration = ()=>{
    
    const[spinner,setSpinner] = useState(false)
    const submitHandler = async (e)=>{
        setSpinner(true);
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const city = data.get('city');
        const message = data.get('message')
        const dataa = {name,email,number,city,message}
        console.log(dataa);
       
        const header = new Headers()
       
        header.append("Content-Type", "application/json")
        
        const raw = JSON.stringify(dataa)
        try {
            const response = await fetch("http://localhost:5000/InfluencerRegistration",{
                method:'POST',
                body:raw,
                headers:header
                
            
            })
            const dataa = await response.json();
            console.log(dataa);
            setSpinner(false);
        } catch (error) {
            setSpinner(false)
        }
       

    }







    return (
        <>
            <GoToTop/>
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

                    <div className={classes.formContainer}>
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
            </div>

        </>
    )
}


export default InfluencerRegistration
