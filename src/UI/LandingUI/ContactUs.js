import React from "react";
import classes from "./ContactUS.module.css"
import { useState } from "react";
import Button from "../../Components/Button";
import avatar from "../../Assets/ImageAssets/ContactUs/contactUs.svg"

const ContactUs=()=>{


    const[spinner,setSpinner] = useState(false)
    const submitHandler = async (e)=>{
        setSpinner(true);
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const message = data.get('message');
        const dataa = {name,email,number,message}
        // console.log(dataa);
       
        const header = new Headers()
       
        header.append("Content-Type", "application/json")
        
        const raw = JSON.stringify(dataa)
        try {
            const response = await fetch("http://localhost:5000/contactUs",{
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
            <div className={classes.mainContainer} id="contactUs">
                <div className={classes.container}>
                    <div className={classes.avatar}>
                        <img src={avatar} alt=" "></img>
                    </div>
                    <div className={classes.title}>
                            <span>Contact </span> &nbsp;Us
                    </div>
                    <div className={classes.subTitle}>
                        Prakriya is a digital marketing agency that also serves as a forum for influencers and  brands to collaborate with each other on new projects. We assist influencers get campaigns   and sponsorships from high-quality brands, agencies, and startups. This frees you up to do    what you do best, which is to interact and expand your audience via great content.
                    </div>
                    <div className={classes.form}>
                        <div className={classes.formTitle}>
                            REGISTRATION FORM
                        </div>
                        <form className={classes.mainForm} autoComplete="off" onSubmit={submitHandler} >
                                <label>Full Name</label>
                                <input required type="text" name="name"></input>
                                <label>E-Mail</label>
                                <input required type="email" name="email"></input>
                                <label>Contact Number</label>
                                <input required type="tel" name="number"></input>
                                <label>Message</label>
                                <textarea className={classes.message} maxLength="550" name="message" cols="40" rows="5"></textarea>
                                <Button spinner={spinner}></Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs