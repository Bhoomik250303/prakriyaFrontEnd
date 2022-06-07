import React, { useMemo, useEffect, useRef, useState} from 'react';
import _ from 'loadsh'
import useScrollBlock from '../../Hooks/useScrollBlock';
import classes from "./ClientSection.module.css"
import {db} from '../../firebase'
import arrow from "../../Assets/ImageAssets/Section3/ICONS/arrows.svg"
import {collection, query, getDoc, onSnapshot, getDocs} from "firebase/firestore"


const ClientSection = (props) => {

    const scrollContainer = useRef();
    const [blockScroll, allowScroll] = useScrollBlock();
    const [clientList , setClientList] = useState([]);
    const [showEmptyClient, setShowEmptyClient] = useState(true)
    useEffect(() => {
        const q = query(collection(db,'our clients'))
        getDocs(q).then((querySnapshot)=>{
                setClientList(querySnapshot.docs);
                setShowEmptyClient(false)
            })
    },[])


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
        console.log(event)
        changePage(event.deltaY);
      };
    const onWheelThrottled = useMemo(() => _.throttle(onWheel, 1000), []);

    const mouseOnClient = () => {
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
    
        const sortingIndexWise = () => {
        clientList.sort((a,b)=>{
            return a.data().index < b.data().index ? a.data().index : b.data().index;
        })
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
                    {
                        showEmptyClient &&
                                < >
                                <div key="1" className={classes.contentForClient}/>
                                <div key="2" className={classes.contentForClient}/>
                                <div key="3" className={classes.contentForClient}/>
                                </>
                    }
                    {
                        sortingIndexWise()
                    }
                    {

                        clientList.map((e)=>{
                            return(
                                <div key={e.data().displayName} className={classes.contentForClient}>
                                    <img src={e.data().logoImageUrl} alt=" "></img>
                                </div>
                            )
                        })
                    }




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