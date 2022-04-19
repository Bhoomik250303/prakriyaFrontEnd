import React,{useState,useCallback,useEffect} from 'react';
import HamBurger from '../../UI/NavbarUI/HamBurger';
import ModalOverlay from '../../UI/NavbarUI/ModalOverlay';
import classes from "./Navbar.module.css"


const Navbar = () => {
  const [modal, setModal] = useState(false)

 

  const handleModal = useCallback(() => {
    setModal(true)
    
  },[])

  const closeModalHandler = ()=>{
    setModal(false);
  }
  

  return (
    <>
      
      <div className={classes.navContainer}>
        <div className={classes.navMain}>
          <div className={classes.Logo}>Logo</div>
          <div className={classes.Right}>
            <div className={classes.Options}>
              <div>Options1</div>
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