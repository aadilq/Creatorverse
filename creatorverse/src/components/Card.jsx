import React from "react";
import ReactDOM from "react-dom/client";


function Card (props){
    return(
        <div className="block p-6 w-fit
            bg-blue-900 rounded-lg 
            border border-grey-200 shadow-md">
            <h1>Name</h1>
            <h1 className="text-3xl font-bold">{props.creator.name}</h1>
            <h2>{props.creator.url}</h2>
            <p>{props.creator.description}</p>
            <img src = {props.creator.imgURL} alt={props.creator.name || "Card Image"} />
        </div>
    )
}

export default Card;