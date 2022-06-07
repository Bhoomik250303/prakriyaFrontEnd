import React,{useEffect, useRef} from "react";
import classes from "./WhoWeAre.module.css"
import avatar from "../../Assets/ImageAssets/WhoWeAre/whoWeAre.svg"

const WhoWeAre = ()=>{

    const containerRef = useRef();
    const imageRef = useRef();

    useEffect(()=>{
        const obsCallback = (entries, observer)=>{
            // console.log(entries[0].isIntersecting);
            if(entries[0].isIntersecting){
                // console.log(entries[0]);
            
                containerRef.current.classList.remove(classes['temp'])
                imageRef.current.classList.remove(classes['imageTemp'])
                // containerRef.current.classList.add(classes['unTemp'])
                observer.unobserve(containerRef.current)
            }
        }
    
        const obsOptions = {
            root: null,
            threshold :0.5
        }
    
        const observer = new IntersectionObserver (obsCallback, obsOptions);
        observer.observe(containerRef.current)
    },[])

    return(
        <>
            <div className={`${classes.mainContainer}`} id="about">
                
                <div ref ={containerRef} className={`${classes.container} ${classes.temp}`}>
                       <div className={classes.title}>
                            <div className={classes.title_main}><span>Who</span> we are</div>
                            <div className={classes.title_sub}>
                                Prakriya is a digital marketing agency that acts as a platform for influencers and companies to collaborate on new initiatives.
                            </div>
                       </div>
                       <div className={classes.text}>
                            <div ref={imageRef} className={`${classes.image} ${classes.imageTemp}`}>
                                <img alt=" " src={avatar}></img>
                            </div>
                            <div className={classes.textContainer}>
                            Understanding your core business model and your vision of a successful organization are vital for us to provide a full range of comprehensive digital marketing solutions that strikes the perfect balance between innovation, viability and crystal clear communication on and off the internet; the key ingredient to empower your company with the flexibility it needs to thrive in today's fiercely competitive online business world.
                            </div>
                            
                       </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre;