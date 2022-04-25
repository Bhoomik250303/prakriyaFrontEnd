import React,{useState,useCallback,useEffect, useRef} from 'react';
import HamBurger from '../../UI/NavbarUI/HamBurger';
import ModalOverlay from '../../UI/NavbarUI/ModalOverlay';
import classes from "./Navbar.module.css"
import useWindowDimensions from '../../Hooks/useWindowDimension';

const Navbar = () => {
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
      if(window.scrollY>height){
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
      
      <div className={`${classes.navContainer} ${appear ? classes.showNav :classes.hideNav} ${bg && classes.setBg } `} ref={navBar} onWheel={navScrollHandler}>
        <div className={classes.navMain}>
          <div className={classes.Logo}>Logo</div>
          <div className={classes.Right}>
            <div className={classes.Options}>
              <div><a href='#content2'>Options1</a></div>
              <div>Options2</div>
              <div>Options3</div>

            </div>
            <div className={classes.ToggleBar}>
              <HamBurger handleModal={handleModal}></HamBurger>
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay show={modal} closeModal={closeModalHandler}/>
      </>
  );
}

export default Navbar;