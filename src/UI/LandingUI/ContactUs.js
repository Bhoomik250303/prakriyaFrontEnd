import React, { useEffect } from "react";
import classes from "./ContactUS.module.css"
import { useState, useRef } from "react";
import Button from "../../Components/Button";
import avatar from "../../Assets/ImageAssets/ContactUs/contactUs.svg"

const ContactUs = () => {


    const [spinner, setSpinner] = useState(false)
    const containerRef = useRef()
    const avatarRef = useRef()


    const submitHandler = async (e) => {
        setSpinner(true);
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const message = data.get('message');
        const dataa = { name, email, number, message }
        // console.log(dataa);

        const header = new Headers()

        header.append("Content-Type", "application/json")

        const raw = JSON.stringify(dataa)
        try {
            const response = await fetch("https://prakriyamailservice.herokuapp.com/contactUs", {
                method: 'POST',
                body: raw,
                headers: header


            })
            const responsedata = await response.json();
            console.log(responsedata)
            if (responsedata.message === 'Success') {
                alert('Message sent Successfully! ✉️')
            } else {
                alert("A Problem Occured ❌")
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
            
                containerRef.current.classList.remove(classes['temp1'])
                avatarRef.current.classList.remove(classes['temp2'])
                
                // containerRef.current.classList.add(classes['unTemp'])
                observer.unobserve(containerRef.current)
            }
        }
    
        const obsOptions = {
            root: null,
            threshold :0.3
        }
    
        const observer = new IntersectionObserver (obsCallback, obsOptions);
        observer.observe(containerRef.current)
    },[])

    return (
        <>
            <div className={classes.mainContainer} id="contactUs">
                <div className={`${classes.container} ${classes.temp1}`} ref={containerRef}>
                    <div className={`${classes.avatar} ${classes.temp2}`} ref={avatarRef}>
                        <img src={avatar} alt=" "></img>
                    </div>
                    <div className={classes.title}>
                        <span>Contact </span> &nbsp;Us
                    </div>
                    <div className={classes.subTitle}>
                        Prakriya is a digital marketing agency that also serves as a forum for influencers and brands to collaborate with each other on new projects. We assist influencers get campaigns and sponsorships from high-quality brands, agencies, and startups enabling them to interact effectively and expand their audience via great content.
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