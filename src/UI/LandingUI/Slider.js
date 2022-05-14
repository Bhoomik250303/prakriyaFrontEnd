import React, { useEffect,useRef } from "react";
import "./Slider.css"
import image9 from "../../Assets/ImageAssets/Section3/ICONS/affiliates_icon-01.png"
import image7 from "../../Assets/ImageAssets/Section3/ICONS/Analytics_icon-01.png"
import image5 from "../../Assets/ImageAssets/Section3/ICONS/brand_icon-01.png"
import image3 from "../../Assets/ImageAssets/Section3/ICONS/content_icon-01.png"
import image8 from "../../Assets/ImageAssets/Section3/ICONS/conversion_icon-01.png"
import image4 from "../../Assets/ImageAssets/Section3/ICONS/digitalPr_icon-01.png"
import image10 from "../../Assets/ImageAssets/Section3/ICONS/influencer_icon-01.png"
import image6 from "../../Assets/ImageAssets/Section3/ICONS/paid _marketing_icon-01.png"
import image2 from "../../Assets/ImageAssets/Section3/ICONS/seo_icon-01.png"
import image1 from "../../Assets/ImageAssets/Section3/ICONS/sm_icon-01.png"
import arrows from "../../Assets/ImageAssets/Section3/ICONS/arrows.svg"
const Slider = (prop) => {

    // const [data,setData]= useState({data:'',bool:false})
    const circle = useRef();
    // let circleCount = 0; do not delete this comment


    useEffect(() => {
        let circleCount = 0;
        const slides = document.querySelectorAll('.slide');
        // const slider = document.querySelector('.slider');
        const btnRight = document.querySelector('.slider__btn--right')
        const btnLeft = document.querySelector('.slider__btn--left');
        let curSlide = 0;
        const maxSlide = slides.length;
        const gotoSlide = function (slide) {
            slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
        }
        const next = function () {
            if(circleCount<9){
                // console.log(circle.current.children[0].classList);
                circle.current.children[circleCount].classList.remove('circleTransform')
                circle.current.children[circleCount+1].classList.add('circleTransform')
                circleCount++;
            }else{
                circle.current.children[circleCount].classList.remove('circleTransform')
                circleCount=0;
                circle.current.children[circleCount].classList.add('circleTransform')

            }
           


            if (curSlide === maxSlide - 1) {
                curSlide = 0;
            } else { curSlide++; };


            gotoSlide(curSlide);
        }
        const prev = function () {
            if(circleCount>0){
                // console.log(circle.current.children[0].classList);
                circle.current.children[circleCount].classList.remove('circleTransform')
                circle.current.children[circleCount-1].classList.add('circleTransform')
                circleCount--;
            }else{
                circle.current.children[circleCount].classList.remove('circleTransform')
                circleCount=9;
                circle.current.children[circleCount].classList.add('circleTransform')

            }



            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            } else { curSlide-- };

            gotoSlide(curSlide);
        }

        gotoSlide(0);

        btnRight.addEventListener('click', next);

        btnLeft.addEventListener('click', prev);


        ////now to use arrowkeys for slider

        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        });

    }, [])

    const clickHandler = (e)=>{
       prop.sliderDataHandler({data:e.target.closest('.slide').id,bool:true})
    
    
    }


    return (
        <>
            {/* <div className={classes.slider}>
                <div className={classes.slide}><img src="../../Assets/SliderImages/img-1.jpg" alt="Photo 1" /></div>
                <div className={classes.slide}><img src="../../Assets/SliderImages/img-2.jpg" alt="Photo 2" /></div>
                <div className={classes.slide}><img src="../../Assets/SliderImages/img-3.jpg" alt="Photo 3" /></div>
                <div className={classes.slide}><img src="../../Assets/SliderImages/img-4.jpg" alt="Photo 4" /></div>
                <button className={`classes.slider__btn classes.slider__btn--left`}>&larr;</button>
                <button className={`classes.slider__btn classes.slider__btn--right`}>&rarr;</button>
            
            </div> */}
            
                <div className="slider">

                    <div id={"1"} className="slide" onClick={clickHandler}  >
                        
                        <img src={image1} alt=" "></img>
                        <div className="title">Social Media</div>
                    </div>
                    <div id={"2"}  className="slide"onClick={clickHandler}>
                      
                        <img src={image2} alt=" "></img>
                        <div className="title">Search Engine Optimization</div>
                    </div>
                    <div id={"3"}  className="slide" onClick={clickHandler}>
                        
                        <img src={image3} alt=" "></img>
                        <div className="title">Content Marketing</div>
                    </div>
                    <div id={"4"}  className="slide" onClick={clickHandler}>
                       
                        <img src={image4} alt=" "></img>
                        <div className="title">Digital PR</div>
                    </div>
                    <div id={"5"} className="slide"  onClick={clickHandler}>
                        
                        <img src={image5} alt=" "></img>
                        <div className="title">Brand Strategy</div>
                    </div>
                    <div id={"6"}  className="slide"onClick={clickHandler}>
                        
                        <img src={image6} alt=" "></img>
                        <div className="title">Paid Marketing</div>
                    </div>
                    <div id={"7"}  className="slide" onClick={clickHandler}>
                        
                        <img src={image7} alt=" "></img>
                        <div className="title">Analytics</div>
                    </div>
                    <div id={"8"}  className="slide" onClick={clickHandler}>
                        
                        <img src={image8} alt=" "></img>
                        <div className="title">Conversion Optimization</div>
                    </div>
                    <div id={"9"} className="slide"  onClick={clickHandler}>
                        
                        
                        <img src={image9} alt=" "></img>
                        <div className="title">Affiliates</div>
                    </div>
                    <div id={"10"}  className="slide"onClick={clickHandler}>
                        
                        
                        <img src={image10} alt=" "></img>
                        <div className="title">Influencer Marketing</div>
                    </div>
                    
                    
                </div>
                <div className="slider-modal-button">
                    <div className="slider__btn slider__btn--left">
                        <img src={arrows}alt=" " style={{transform:"scale(-1)"}}></img>
                    </div>
                    <div className="slider__btn slider__btn--right">
                        <img src={arrows} alt=" "></img>
                    </div>
                </div>
                <div className="slider-modal-circle">
                    <div className="circleContainer" ref={circle} style={{display:"none"}}>
                        <div className="circleIndicator circleTransform "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                        <div className="circleIndicator "></div>
                    </div>
                </div>
            
           
        </>
    )

}

export default Slider;