import React,{useState,useCallback,useEffect, useRef} from 'react';
import HamBurger from '../../UI/NavbarUI/HamBurger';
import ModalOverlay from '../../UI/NavbarUI/ModalOverlay';
import classes from "./Navbar.module.css"
import useWindowDimensions from '../../Hooks/useWindowDimension';
import logo from "../../Assets/ImageAssets/mainLogo.png"

const Navbar = (props) => {
  const [modal, setModal] = useState(false)
  const [y, setY] = useState(0)
  const [appear, setAppear] = useState(true);
  const [bg, setBg] = useState(false);
  
 
  const navBar = useRef();

  const navScrollHandler =(e)=>{
    console.log(navBar)
  }
  
  const { height, width } = useWindowDimensions();

  const handleNavigation = useCallback(
    e => {
      
      const window = e.currentTarget;
      if(window.scrollY>height-150){
        setBg(true)
      }else{
        setBg(false)
      }
      if (y > window.scrollY) {
        setAppear(true)
      } else if (y < window.scrollY) {
        setAppear(false)
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);






  const handleModal = useCallback(() => {
    setModal(true)
    
  },[])

  const closeModalHandler = ()=>{
    setModal(false);
  }
  

  return (
    <>
      
      <div className={`${classes.navContainer} ${appear ? classes.showNav :classes.hideNav} ${bg && classes.setBg } ${props.navWidth && classes.navWidth} `} ref={navBar} onWheel={navScrollHandler}>
        <div className={classes.navInnerContainer}>
          <div className={classes.navMain}>
            <div className={classes.Logo}><img src={logo}></img></div>
            <div className={classes.Right}>
              <div className={classes.Options}>
                <div><a href='#content2'>Home</a></div>
                <div>Influencer Registration</div>
                <div>About</div>
                <div>Contact Us</div>

              </div>
              <div className={classes.ToggleBar}>
                <HamBurger handleModal={handleModal}></HamBurger>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <ModalOverlay show={modal} closeModal={closeModalHandler}/>
      </>
  );
}

export default Navbar;