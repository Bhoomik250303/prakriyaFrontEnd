import React, { useEffect, useState } from "react";
import classes from "./CardModal.module.css"
import image9 from "../../Assets/ImageAssets/Section3/affiliates_inner-01.png"
import image7 from "../../Assets/ImageAssets/Section3/analytic_ inner-01.png"
import image5 from "../../Assets/ImageAssets/Section3/brand_strategy-01.png"
import image3 from "../../Assets/ImageAssets/Section3/content_inner-01.png"
import image8 from "../../Assets/ImageAssets/Section3/conversion_ optimization-01.png"
import image4 from "../../Assets/ImageAssets/Section3/digital _pr_ inner-01.png"
import image10 from "../../Assets/ImageAssets/Section3/influencer_inner-01.png"
import image6 from "../../Assets/ImageAssets/Section3/paid_marketing_inner-01.png"
import image2 from "../../Assets/ImageAssets/Section3/SEO_inner-01.png"
import image1 from "../../Assets/ImageAssets/Section3/sm_inner-01.png"

const images = {image1,image2,image3 ,image4,image5,image6 ,image7 ,image8 ,image9 ,image10 }


const CardModal = (dim) => {
    // console.log("dhisoddid")
    // const[dimension,setdimension]=useState({width:'',height:""})

    // useEffect(()=>{
    //     setdimension({width:dim.dim.width,height:dim.dim.height})

    // },[])
    const clickHandler = ()=>{
        dim.setboolean();
    }

    // console.log(dim.dim.height + "px");
    return (
        <>
           
               
                {/* <div style={{ maxWidth: dim.dim.width + "px", maxHeight: dim.dim.height + "px", background: "pink", height: "40vw", width: "90%" ,display:"flex",flexDirection:"column",alignItems:"center"}}> */}
                <div className={classes.mainContainer}>
                    <div className={classes.container}>
                        <div className={classes.closeModal}>
                                <div className={classes.closeButton} onClick={clickHandler}>
                                
                                    <span className="material-symbols-outlined">close</span>
                                    
                                    
                                </div>
                        </div>     
                    </div>
                    
                    <div className={classes.imagee}>
                        <img src={images[`${dim.data}`]}></img>
                    </div>
                    <div className={classes.imageText}>
                            loremIpsum
                    </div>
                </div>
            


        </>
    )
}

export default CardModal