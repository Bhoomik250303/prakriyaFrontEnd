import React, { useEffect, useRef } from "react";
import { useState } from "react";

import {ref,  getDownloadURL, uploadBytes} from "firebase/storage";
import { storage} from "../../firebase";
import {collection, query, getDoc, onSnapshot, getDocs} from "firebase/firestore"
import {db ,app} from '../../firebase'
import classes from "./Careers.module.css"
import avatar1 from "../../Assets/ImageAssets/Careers/avatar1.svg"
import light from "../../Assets/ImageAssets/Careers/light.svg"
import wAvatar from "../../Assets/ImageAssets/Careers/wAvatar.svg"
import cloud from "../../Assets/ImageAssets/Careers/cloud.svg"
import careersMobile from "../../Assets/ImageAssets/Careers/careersMobile.svg"
import Button from "../../Components/Button";
const Careers = () => {

    const [isHiring, setIsHiring] = useState(false)
    const[hiringPosition,setHiringPosition] = useState("")
    useEffect(() => {
        const q = query(collection(db,'hiring status'))
        getDocs(q).then((documents)=>{
            setIsHiring(documents.docs[0].data()['isHiring']);
            setHiringPosition(documents.docs[0].data()['positionHiring'])

        });
        // onSnapshot(q,(querySnapshot)=>{
        //     })
    },[])
    

    const fileUpload = useRef();
    const containerRef = useRef();
    const[spinner,setSpinner] = useState(false)
    const submitHandler = async (e)=>{
        
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const number = data.get('number');
        const resume = data.get('resume');
        // data.append('resume',e.target.files[0])
        if(fileUpload.current.files[0].size > 2000000){
            alert('File size Exceeds MAX limit of 2Mb 📄❗')
            return;
        }

                
        
        try{
            const file  = e.target.files[0];
            const storageRef = app.storage().ref()
            const fileRef = storageRef.child(file.name)
            fileRef.put(file).then(()=>{
                console.log("DONE")
            })
        }
        catch(err){
            console.log(err.toString())
        }
        // console.log(e)
        setSpinner(true);
        const header = new Headers()
        // header.append('Content-Type: multipart/form-data; boundary=abcdefghi')
        // header.append("Content-Type", "application/json")
        header.append("Content-Type", "multipart/form-data")
        // const body = {resume,name,email,number}
        // const raw = JSON.stringify(data)
        try {
            const response = await fetch("https://prakriyamailservice.herokuapp.com/careers",{
                method:'POST',
                body:data
            
            })
            const responsedata = await response.json();
            console.log(responsedata);
            if(responsedata.message==='Success'){
                alert('Message sent Successfully! ✉️')
            }else{
                alert("A problem Occured ❌")
            }
            setSpinner(false);
        } catch (error) {
            setSpinner(false)
        }
       

    }

    const changeHandler = (e)=>{
        if(fileUpload.current.files.length ===0) return;
        if(fileUpload.current.files[0].size > 2000000)
            alert('File size Exceeds MAX limit of 2Mb 📄❗')

        // console.log(fileUpload.current.files[0].size);

    }

    useEffect(()=>{
        const obsCallback = (entries, observer)=>{
            // console.log(entries[0].isIntersecting);
            if(entries[0].isIntersecting){
                // console.log(entries[0]);
            
                containerRef.current.classList.remove(classes['temp'])
                
                // containerRef.current.classList.add(classes['unTemp'])
                observer.unobserve(containerRef.current)
            }
        }
    
        const obsOptions = {
            root: null,
            threshold :0.1
        }
    
        const observer = new IntersectionObserver (obsCallback, obsOptions);
        observer.observe(containerRef.current)
    },[])

    return (
        <>
            <div className={classes.mainContainer} id="career">
                <div className={`${classes.container} ${classes.temp}`} ref={containerRef}>
                    <div className={classes.title}>
                        careers
                    </div>
                    <div className={classes.subTitle}>
                        Keeping the finest and brightest in our workforce is critical to our success. If you're seeking for a place where you can collaborate with like-minded individuals, this may be the agency for you.
                    </div>
                    <div className={classes.careersMobile}>
                        <img  src={careersMobile} alt=" "></img>
                    </div>
                        <div className={classes.form}>
                            <div className={classes.formTitle}>APPLY</div>
                            <div className={classes.formContainer}>
                                <form id="career" onSubmit={submitHandler}  autoComplete="off" encType="multipart/form-data">
                                    <label className={classes.label}>Full Name</label>
                                    <input required type="text" id="name" name="name"></input>
                                    <label className={classes.label}>E-mail</label>
                                    <input required type="email" id="email" name="email"></input>
                                    <label className={classes.label}>Phone</label>
                                    <input required type="tel" id="number" name="number"></input>
                                    <label className={classes.label}>Resume</label>
                                    
                                    
                                    
                                    {/* <label className={classes.resumeLabel} htmlFor="resume">File</label> */}
                                    <input ref={fileUpload} onChange={changeHandler} required className={classes.file} type="file"  name="resume" accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" id="resume" style={{opacity:"1"}} />
                                    
                                    <Button spinner={spinner}></Button>
                                </form>
                            </div>
                        </div>
                    <div className={classes.avatar1}>
                        <img src={avatar1} alt=" "></img>
                    </div>
                    <div  className={classes.avatar2}>
                        
                        <img src={light} alt=" "></img>
                    </div>  
                    <div  className={classes.avatar3}>
                        <img src={wAvatar} alt=" "></img>
                    </div>
                    <div className={classes.hiring}>{isHiring ? hiringPosition : "Stay Tuned!"}</div>
                    <div className={classes.cloud}>
                        <div className={classes.cloudText}>{isHiring ? 'WE ARE HIRING' : ' '}</div>
                        <img src={cloud} alt=" "></img>
                    </div>         
                </div>
            </div>
        </>
    )
}

export default Careers