import React, {  useMemo, useRef} from 'react';
import _ from 'loadsh'
import useScrollBlock from '../../Hooks/useScrollBlock';
import classes from "./ClientSection.module.css"

import arrow from "../../Assets/ImageAssets/Section3/ICONS/arrows.svg"
import client1 from "../../Assets/ImageAssets/SectionClient/client 1-01.png"
import client2 from "../../Assets/ImageAssets/SectionClient/client 2-01.png"
import client3 from "../../Assets/ImageAssets/SectionClient/client 3-01.png"
import client4 from "../../Assets/ImageAssets/SectionClient/client 4-01.png"
import client5 from "../../Assets/ImageAssets/SectionClient/client 5-01.png"
import client6 from "../../Assets/ImageAssets/SectionClient/client 6-01.png"

const ClientSection = (props) => {

    const scrollContainer = useRef();
    const [blockScroll, allowScroll] = useScrollBlock();
    // const circle = useRef();
    
    // const onWheel = (e) => {

    //     console.log(window.innerWidth)
    //         scrollContainer.current.scrollLeft += window.innerWidth/3
           
            
        
        
    //     // let count = 0;
    //     // if(count === 0){
    //     //   circle.current.children[1].classList.remove(classes.circleTransform)
    //     //   circle.current.children[0].classList.add(classes.circleTransform)

    //     //  }
    //     // console.log(e.deltaY)
    //     //  console.log(scrollContainer);
    //     //  console.log(window.pageYOffset)
    //     // console.log(scrollContainer.current.scrollLeft += e.deltaY*2000)

    //     console.log(e);
        
        
       


    //     if (e.deltaY > 0) {
    //         circle.current.children[1].classList.add(classes.circleTransform)
    //         circle.current.children[0].classList.remove(classes.circleTransform)
    //         return;
    //     }
    //     if (e.deltaY < 0) {
    //         circle.current.children[1].classList.remove(classes.circleTransform)
    //         circle.current.children[0].classList.add(classes.circleTransform)
    //     }





    //     scrollContainer.current.classList.add(classes.setPos)
    // }

    const changePage = (direction) => {
        
        if (direction > 0) {
        //   console.log("scroll down");
          scrollContainer.current.scrollLeft += window.innerWidth
        } else {
        //   console.log("scroll up");
          scrollContainer.current.scrollLeft -= window.innerWidth
        }
      };
      const onWheel = (event) => {
          return //currently not useing onWheel, may implement in future
        // console.log(event)
        changePage(event.deltaY);
      };
    const onWheelThrottled = useMemo(() => _.throttle(onWheel, 1000), []);

    const mouseOnClient = () => {
        return //currently not useing mouseOnClient, may implement in future
        if (props.isMobile) {
            blockScroll();
            props.navWidthHandler(true);//This line prevents navbbar stretching to 100vw after removal of Scollbar
        }


    }
    
  

    const leftArrowClickHandler = ()=>{
        scrollContainer.current.scrollLeft -= window.innerWidth;
    }
    const rightArrowClickHandler = ()=>{
        scrollContainer.current.scrollLeft += window.innerWidth
    }

    return (
        <>

            <div className={classes.bodyForClient} id="clients" >
                <div className={classes.title}><div><span>Our</span> Clients</div></div>
                <div className={classes.containerForClient}  onWheel={onWheelThrottled}  ref={scrollContainer} onMouseEnter={mouseOnClient} onMouseLeave={() => { allowScroll() }} >
                    <div className={classes.arrow1} onClick={leftArrowClickHandler}>
                        <img src={arrow} alt=""></img>
                    </div>
                    <div className={classes.arrow2} onClick={rightArrowClickHandler}>
                        <img src={arrow} alt=""></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client1} alt=" "></img>
                    </div>
                    <div className={classes.contentForClient} >
                        <img src={client2} alt=" "></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client3} alt=" "></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client4} alt=" "></img>
                    </div>
                    <div className={classes.contentForClient}>
                        <img src={client5} alt=" "></img>
                    </div>
                    <div className={classes.contentForClient} >
                        <img src={client6} alt=" "></img>
                    </div>




                </div>

                {/* <div className={classes.clientDot} ref={circle}>
                    <div className={`${classes.clientDotCircle1} ${classes.circleTransform}`}> </div>
                    <div className={classes.clientDotCircle1}> </div>
                </div> */}




            </div>

        </>
    )
}
export default ClientSection