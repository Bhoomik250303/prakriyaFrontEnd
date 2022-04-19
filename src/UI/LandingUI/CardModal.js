import React, { useEffect, useState } from "react";
import classes from "./CardModal.module.css"
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
                                
                                        <div className={classes.bar1}></div>
                                        <div className={classes.bar2}></div>
                                        <div className={classes.bar3}></div>
                                    
                                    
                                </div>
                        </div>
                        <div>
                            {dim.data}
                        </div>
                            
                            
                    </div>
                </div>
            


        </>
    )
}

export default CardModal