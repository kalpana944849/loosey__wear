import React from "react";
import '../stylesheets/Common/Button.scss';

function Button(props){
    return(
        <button type={props.type} className={props.className}>{props.name}</button>
    )
} 
export default Button;