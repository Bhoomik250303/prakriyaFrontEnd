import React from "react";
import classes from "./Footer.module.css"
import logo1 from "../../Assets/ImageAssets/Footer/logooo-01.png"
import facebook from "../../Assets/ImageAssets/Footer/facebook.png"
import twitter from "../../Assets/ImageAssets/Footer/twitter.png"
import instagram from "../../Assets/ImageAssets/Footer/instagram.png"
import linkedin from "../../Assets/ImageAssets/Footer/linkedin.png"

const Footer = () => {
    return (
        <>
            <div className={classes.footerDiv}>
                <div className={classes.logoImageDiv}><img className={classes.logoImage} src={logo1} /></div>
                <div className={classes.listOfLinksMobile}>
                    <div className={classes.listOfLinks}>
                        <a href="#">Home</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">About</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Our Services</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Our Approach</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Our Clients</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Influencer Registration</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Contact Us</a>
                        <div className={classes.spaceBetweenLinks}></div>
                        <a href="#">Team Prakriya</a>
                    </div>
                    <div className={classes.listOfOtherLinks}>
                        <a href="#">Career</a>
                        <div className={classes.spaceBetweenLinks}></div>

                        <p >Send us your resume</p>
                        <a href="#" type="email">prakriyadigital@gmail.com</a>
                    </div>
                </div>
                <div className={classes.listOfSocialMedia}>
                    <div className={classes.socialMediaIcons} ><img src={facebook}  /></div>
                    <div className={classes.socialMediaIcons}><img src={twitter}  /></div>
                    <div className={classes.socialMediaIcons}><img src={instagram} /></div>
                    <div className={classes.socialMediaIcons}><img src={linkedin}  /></div>
                </div>
                
            </div>
            <div className={classes.copyRight}>© 2022 Prakriya Digital</div>



            
        </>
    )

}
export default Footer