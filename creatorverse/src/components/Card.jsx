import React from "react";
import ReactDOM from "react-dom/client";
import EditCreator from "../pages/EditCreator";
import ViewCreator from "../pages/ViewCreator";
import { useNavigate } from "react-router-dom";



function Card (props){
  const navigate = useNavigate();
    
    const navigateToEditCreator = () =>{
        navigate(`/editCreator/${props.creator.name}`)
      };
    const navigateToViewCreator = () =>{
        navigate(`/viewCreator/${props.creator.name}`)
      };

      console.log(props.creator.imageURL)
    
    return(
        <div className="block p-6 w-1/2 bg-blue-900 rounded-lg border border-grey-200 shadow-md py-15 m-10 mx-auto">
            <label className="pb-10">
            <h1 className="text-3xl font-bold pb-5">{props.creator.name}</h1>
            </label>
            <label>
            <h2 className="pb-5">{props.creator.url}</h2>
            </label>
            <p className="font-semibold pb-5">{props.creator.description}</p>
            <img className = "mx-auto w-60 h-60" src = {props.creator.imageURL} alt={props.creator.name || "Card Image"} />
            <div className="space-x-4">
            <button onClick={navigateToEditCreator}>Edit Creator</button>
            <button onClick={navigateToViewCreator}>View Creator</button>
            </div>
        </div>
    )
}

export default Card;