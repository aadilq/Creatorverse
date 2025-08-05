import React from "react";
import ReactDOM from "react-dom/client";


function Card (props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.url}</h2>
            <p>{props.description}</p>
            <img src = {props.imgURL} alt={props.name || "Card Image"} />
        </div>
    )
}

export default Card;