import React, { useState } from "react";
import classes from "./Button.module.css"

const Button = (props) => {

    // const[spinner,setSpinner] = useState(false);

    // const clickHandler = (e)=>{
    //     console.log("djdjddjdjjdj");
    //     console.log(e);
    //     setSpinner(true);
        
    // }

    return (
        <>
            <div className={classes.container}>
                <button className={classes.button} type="submit" disabled={props.spinner}>
                    SUBMIT

                </button>
                {props.spinner &&<div className={classes.lds_ellipsis}><div></div><div></div><div></div><div></div></div>}
            </div>

        </>
    )
}

export default Button