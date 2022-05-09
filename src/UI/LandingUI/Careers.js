import React from "react";
import classes from "./Careers.module.css"
import avatar1 from "../../Assets/ImageAssets/Careers/avatar1.svg"
import light from "../../Assets/ImageAssets/Careers/light.svg"
import wAvatar from "../../Assets/ImageAssets/Careers/wAvatar.svg"
import cloud from "../../Assets/ImageAssets/Careers/cloud.svg"

const Careers = () => {

    const submitHandler = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const resume = data.get('resume');

        
        console.log(name,email,number,resume)
        
    }




    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        careers
                    </div>
                    <div className={classes.subTitle}>
                        Keeping the finest and brightest in our wokrforce is critical to our success. If you're seeking for a place where you can collaborate with like-minded individuals, this may be the agency for you.
                    </div>
                        <div className={classes.form}>
                            <div className={classes.formTitle}>APPLY</div>
                            <div className={classes.formContainer}>
                                <form id="career" onSubmit={submitHandler}  autoComplete="off">
                                    <label className={classes.label}>Full Name</label>
                                    <input type="text" id="name" name="name"></input>
                                    <label className={classes.label}>E-mail</label>
                                    <input type="email" id="email" name="email"></input>
                                    <label className={classes.label}>Phone</label>
                                    <input type="tel" id="number" name="number"></input>
                                    <label className={classes.label}>Resume</label>
                                    
                                    
                                    
                                    {/* <label className={classes.resumeLabel} htmlFor="resume">File</label> */}
                                    <input className={classes.file} type="file"  name="resume" accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="resume" style={{opacity:"1"}} />
                                    
                                    <button className={classes.button} type="submit">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    <div className={classes.avatar1}>
                        <img src={avatar1}></img>
                    </div>
                    <div  className={classes.avatar2}>
                        
                        <img src={light}></img>
                    </div>  
                    <div  className={classes.avatar3}>
                        <img src={wAvatar}></img>
                    </div>
                    <div className={classes.hiring}>Content Writer</div>
                    <div className={classes.cloud}>
                        <div className={classes.cloudText}>WE ARE HIRING</div>
                        <img src={cloud}></img>
                    </div>         
                </div>
            </div>
        </>
    )
}

export default Careers