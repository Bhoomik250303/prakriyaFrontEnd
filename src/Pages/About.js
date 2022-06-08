import React, { useEffect, useRef } from "react";
import classes from "./About.module.css"
import GoToTop from "../Hooks/goToTop.js"
import ourGoals from "../Assets/ImageAssets/About Us/ourGoals.svg"
import ourMission from "../Assets/ImageAssets/About Us/ourMission.svg"
import ourValues from "../Assets/ImageAssets/About Us/ourValues.svg"
import ourVision from "../Assets/ImageAssets/About Us/ourVision.svg"



const About = () => {
    const imageRefRefactor = (ref, tempClass) => {   
        const observer = new IntersectionObserver((entries, observer)=>{
            console.log(entries)
            if(entries[0].isIntersecting){
                ref.current.classList.remove(classes[`${tempClass}`]);
                observer.unobserve(ref.current);
            }
        }, {
            root : null,
            threshold : 0.1,
        })
        observer.observe(ref.current);        
    };
    const imageRef = useRef();
    const imageRefOne = useRef();
    const imageRefTwo = useRef();
    const imageRefThree = useRef();

    useEffect(()=>{
        imageRefRefactor(imageRefOne, 'temp')
        imageRefRefactor(imageRef, 'temp')
        imageRefRefactor(imageRefTwo, 'temp')
        imageRefRefactor(imageRefThree, 'temp')
    },[])


    return (
        <>
            <GoToTop />
            <div className={classes.container}>
                <div className={classes.mainContainer}>
                    <div className={classes.title}><span>About</span> Us</div>
                    <div className={classes.text}>
                        Our name itself suggests that we follow a process by taking cues from the traditional ways of marketing and revamping it to the new-age digital marketing methods. We are a team motivated by a passion for enabling small companies via the use of innovative digital solutions and services.<br /><br />
                        At Prakriya, it's all about anticipating the demands of the customer, solving difficulties, finding solutions, and improving and innovating constantly. We assist company owners, like you, design a digital marketing strategy that can withstand the test of time and is proven to generate revenue growth.<br /><br />
                    </div><br /><br />
                    <div className={`${classes.relative} ${classes.temp}`} ref={imageRef} >
                                <img  src={ourVision} alt=""></img>
                            </div>
                            
                    <div className={classes.subTitle}>OUR VISION</div>
                    <div className={classes.box}>    
                            <div className={classes.subText}>
                                To make the most of your potential so that you may achieve great heights.
                            </div><br></br>
                            <div className={classes.text}>
                                Business owners like you inspire us by taking chances, defying expectations, and enhancing the lives of the people who matter most to you - those who are your target audience. Every one of us grows and changes when we work together<br /><br />
                            </div><br /><br />
                           
                    </div>
                    <div className={`${classes.relative} ${classes.temp}`} ref={imageRefOne} >
                                <img src={ourMission} alt=""></img>
                            </div>
                    <div className={classes.subTitle}>OUR MISSION</div>
                    <div className={classes.box}>
                        
                            <div className={classes.subText}>
                            To ensure that your company achieves its marketing goals using the full potential of the Digital World

                            <br></br>
                            <div className={classes.text}>
                                People, passion and procedures at our company allow you to be creative and pioneers without worry of income loss. We help you be confident in your ability to break through boundaries.<br /><br />
                            </div><br /><br />
                        </div>
                        
                    </div>
        
                    <div className={`${classes.relative} ${classes.temp}`} ref={imageRefTwo} >
                        <img  src={ourValues} alt=""></img>
                    </div>

                    <div className={classes.subTitle}>OUR VALUES</div>
                    <div className={classes.box}>
                            <div className={classes.text}>
                                Keeping true to our core values has helped Prakriya grow tremendously in terms of both customer satisfaction and customer retention. Our company's operations, services, and culture are all built around these basic beliefs.<br /><br />

                            </div>
                            <div className={classes.subText}>
                                Commitment to Integrity and Honesty
                            </div>
                            <div className={classes.text}>Through long-term mutually beneficial connections we aim for 100% customer satisfaction at Prakriya. We hold ourselves responsible to well-defined KPIs established at the beginning of every campaign. To ensure client satisfaction, we adhere to the Prakriya motto: relationships, responsiveness & outcomes.</div><br /><br />
                        

                        
                    </div>

                    <div className={classes.subText}>
                        Corporate Ethics
                    </div>
                    <div className={classes.text}>Prakriya's business concept relies on fostering a dynamic and creative work atmosphere. With this in mind, we want to make sure that our workers have the opportunity to benefit from our success as well. We are dedicated to creating a family-oriented corporate culture that emphasises innovation, creativity, enthusiasm, efficiency, and a commitment to providing excellent customer service to all of our clients and customers. When it comes to communication, we value the input of all parties involved.</div><br /><br />
                    <div className={classes.subText}>
                        Effort, ingenuity, knowledge, and self-assurance
                    </div>
                    <div className={classes.text}>In order to continuously carry out ideas, skillfully counsel on strategy, and create ROI, you'll need this mindset. The standard by which we measure our efforts is whether or not we surpass your expectations.</div><br /><br />



                    <div className={`${classes.relative} ${classes.temp}`} ref={imageRefThree} >
                                <img src={ourGoals} alt=""></img>
                            </div>
                    <div className={classes.subTitle}>OUR GOALS</div>
                    <div className={classes.box}>
                            <div className={classes.text}>
                                To identify your internet marketing objectives and develop a plan, timetable and forecast to meet them. Our methods allow us to forecast traffic growth for each channel and achieve the outcomes you want.<br /><br />
                            </div>
                            <div className={classes.subText}>
                                Focused on Return on Investment (ROI).
                            </div>
                            <div className={classes.text}>In order to achieve customer goals, we focus only on delivering demonstrable profits. It is a source of great satisfaction for us to provide top-notch service at some of the most competitive rates in the business.</div><br /><br />
                            <div className={classes.subText}>
                                Focused Strategy
                            </div>
                            <div className={classes.text}>In order to meet the needs of your company, we provide a wide range of personalized advertising options.</div><br /><br />
                        
                    </div>

                    <div className={classes.subText}>
                        Flexibility
                    </div>
                    <div className={classes.text}>We're results-oriented. To put it another way, we'll be providing you with everything you need for a successful campaign. We are well aware that we must be adaptable if we are to keep pace with our industry's ongoing evolution. Regardless of the length of your stay, you may customise your package to meet your specific needs.</div><br /><br />

                </div>

            </div>
        </>
    )
}

export default About;