import React,{useState,useCallback,useLayoutEffect, useRef} from 'react';
import HamBurger from '../../UI/NavbarUI/HamBurger';
import ModalOverlay from '../../UI/NavbarUI/ModalOverlay';
import classes from "./Navbar.module.css"
import useWindowDimensions from '../../Hooks/useWindowDimension';
import logo from "../../Assets/ImageAssets/mainLogo.png"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = (props) => {
  const [modal, setModal] = useState(false)
  const [y, setY] = useState(0)
  const [appear, setAppear] = useState(true);
  const [bg, setBg] = useState(false);
  const [allow, setAllow] = useState(true);
 
  const navBar = useRef();

  const navScrollHandler =(e)=>{
    console.log(navBar)
  }
  
  const { height, width } = useWindowDimensions();

  const handleNavigation = useCallback(
    e => {
      
      if(allow){
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
      }else{
        setBg(true)
        if (y > window.scrollY) {
          setAppear(true)
        } else if (y < window.scrollY) {
          setAppear(false)
        }
        setY(window.scrollY);
      }
      
    }, [y]
  );

  useLayoutEffect(() => {
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
  const clickHandler=()=>{
    setAllow(false);
  }
  const clickHandler2=()=>{
    setAllow(true);
    setBg(false);
  }

  return (
    <>
      
      <div className={`${classes.navContainer} ${appear ? classes.showNav :classes.hideNav} ${bg && classes.setBg } ${props.navWidth && classes.navWidth} `} ref={navBar} onWheel={navScrollHandler}>
        <div className={classes.navInnerContainer}>
          <div className={classes.navMain}>
            <div className={classes.Logo}><img src={logo}></img></div>
            <div className={classes.Right}>
              <div className={classes.Options}>
                <div><HashLink onClick={clickHandler2} to='/#home'>Home</HashLink></div>
                <div>Influencer Registration</div>
                <div><Link onClick={clickHandler} to='/about'>About</Link></div>
                <div><HashLink to='/#contactUs'>Contact Us</HashLink></div>

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