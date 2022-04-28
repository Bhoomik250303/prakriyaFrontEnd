import React from "react";
import classes from "./GridCard.module.css"
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
const images = {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10};
const GridCard = (props)=>{

    const clickHandler=()=>{
        props.bool(true,props.data)
        // console.log(images);
    }
  

    return(
        <>
            <div onClick={clickHandler} className={classes.square}>
                <img src={images[`${props.data}`]}></img>
                <div className={classes.title}>{props.title}</div>
            </div>
        </>
    )
}

export default GridCard