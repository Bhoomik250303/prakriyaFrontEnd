import React, { useEffect,useRef,useState } from "react";
import "./Slider.css"
import image1 from "../../Assets/SliderImages/img-1.jpg"
import image2 from "../../Assets/SliderImages/img-2.jpg"
import image3 from "../../Assets/SliderImages/img-3.jpg"
import image4 from "../../Assets/SliderImages/img-4.jpg"
const Slider = (prop) => {

    const [data,setData]= useState({data:'',bool:false})
    const circle = useRef();
    let circleCount = 0;


    useEffect(() => {
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
                console.log(circle.current.children[0].classList);
                circle.current.children[circleCount].classList.remove('circleTransform')
                circle.current.children[circleCount+1].classList.add('circleTransform')
                circleCount++;
            }else{
                circle.current.children[circleCount].classList.remove('circleTransform')
                circleCount=0;
                circle.current.children[circleCount].classList.add('circleTransform')

            }
           


            if (curSlide == maxSlide - 1) {
                curSlide = 0;
            } else { curSlide++; };


            gotoSlide(curSlide);
        }
        const prev = function () {
            if(circleCount>0){
                console.log(circle.current.children[0].classList);
                circle.current.children[circleCount].classList.remove('circleTransform')
                circle.current.children[circleCount-1].classList.add('circleTransform')
                circleCount--;
            }else{
                circle.current.children[circleCount].classList.remove('circleTransform')
                circleCount=9;
                circle.current.children[circleCount].classList.add('circleTransform')

            }



            if (curSlide == 0) {
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
       prop.sliderDataHandler({data:e.target.id,bool:true})
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

                    <div id={"A"} className="slide colour1"  onClick={clickHandler} >Tap A</div>
                    <div id={"B"}  className="slide colour2"onClick={clickHandler}>Tap B</div>
                    <div id={"C"}  className="slide colour3" onClick={clickHandler}>Tap C</div>
                    <div id={"D"}  className="slide colour4" onClick={clickHandler}>Tap D</div>
                    <div id={"A"} className="slide colour1"  onClick={clickHandler}>Tap A</div>
                    <div id={"B"}  className="slide colour2"onClick={clickHandler}>Tap B</div>
                    <div id={"C"}  className="slide colour3" onClick={clickHandler}>Tap C</div>
                    <div id={"D"}  className="slide colour4" onClick={clickHandler}>Tap D</div>
                    <div id={"A"} className="slide colour1"  onClick={clickHandler}>Tap A</div>
                    <div id={"B"}  className="slide colour2"onClick={clickHandler}>Tap B</div>
                    
                </div>
                <div className="slider-modal-button">
                    <button className="slider__btn slider__btn--left">&larr;</button>
                    <button className="slider__btn slider__btn--right">&rarr;</button>
                </div>
                <div className="slider-modal-circle">
                    <div className="circleContainer" ref={circle}>
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