import React from "react";
import classes from "./ContactUS.module.css"

import avatar from "../../Assets/ImageAssets/ContactUs/contactUs.svg"

const ContactUs=()=>{


    const submitHandler = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('contact');
        const message = data.get('message');

        
        console.log(name,email,number,message);
    }


    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.avatar}>
                        <img src={avatar}></img>
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
                        <form className={classes.mainForm} autoComplete="off" onSubmit={submitHandler}>
                                <label>Full Name</label>
                                <input type="text" name="name"></input>
                                <label>E-Mail</label>
                                <input type="email" name="email"></input>
                                <label>Contact Number</label>
                                <input type="text" name="contact"></input>
                                <label>Message</label>
                                <textarea className={classes.message} name="message" cols="40" rows="5"></textarea>
                                <button className={classes.button} type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs