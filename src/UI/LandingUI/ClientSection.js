import React, { useState, useRef, useEffect } from 'react';

import useScrollBlock from '../../Hooks/useScrollBlock';
import classes from "./ClientSection.module.css"

import client1 from "../../Assets/ImageAssets/SectionClient/client 1-01.png"
import client2 from "../../Assets/ImageAssets/SectionClient/client 2-01.png"
import client3 from "../../Assets/ImageAssets/SectionClient/client 3-01.png"
import client4 from "../../Assets/ImageAssets/SectionClient/client 4-01.png"
import client5 from "../../Assets/ImageAssets/SectionClient/client 5-01.png"
import client6 from "../../Assets/ImageAssets/SectionClient/client 6-01.png"

const ClientSection = (props) => {

    const scrollContainer = useRef();
    const [blockScroll, allowScroll] = useScrollBlock();
    const circle = useRef();
    const onWheel = (e) => {
        let count = 0;
        // if(count === 0){
        //   circle.current.children[1].classList.remove(classes.circleTransform)
        //   circle.current.children[0].classList.add(classes.circleTransform)

        //  }
        console.log(e.deltaY)
        //  console.log(scrollContainer);
        //  console.log(window.pageYOffset)
        // console.log(scrollContainer.current.scrollLeft += e.deltaY*2000)


        scrollContainer.current.scrollLeft += e.deltaY * 2000;


        if (e.deltaY > 0) {
            circle.current.children[1].classList.add(classes.circleTransform)
            circle.current.children[0].classList.remove(classes.circleTransform)
            return;
        }
        if (e.deltaY < 0) {
            circle.current.children[1].classList.remove(classes.circleTransform)
            circle.current.children[0].classList.add(classes.circleTransform)
        }





        scrollContainer.current.classList.add(classes.setPos)
    }

    const mouseOnClient = () => {
        if (props.isMobile) {
            blockScroll();
            props.navWidthHandler(true);
        }


    }


    return (
        <>

            <div className={classes.bodyForClient}  >
                <div className={classes.title}><div><span>Our</span> Clients</div></div>
                <div className={classes.containerForClient} onWheel={onWheel} ref={scrollContainer} onMouseEnter={mouseOnClient} onMouseLeave={() => { allowScroll() }} >

                    <div className={classes.contentForClient}>
                        <img src={client1}></img>
                    </div>
                    <div className={classes.contentForClient} >
                        <img src={client2}></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client3}></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client4}></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client5}></img>
                    </div>
                    <div className={classes.contentForClient} >
                        <img src={client6}></img>
                    </div>




                </div>

                <div className={classes.clientDot} ref={circle}>
                    <div className={`${classes.clientDotCircle1} ${classes.circleTransform}`}> </div>
                    <div className={classes.clientDotCircle1}> </div>
                </div>




            </div>

        </>
    )
}
export default ClientSection