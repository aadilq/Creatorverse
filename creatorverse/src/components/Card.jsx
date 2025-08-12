import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import EditCreator from "../pages/EditCreator";
import ViewCreator from "../pages/ViewCreator";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { useState } from "react";


function Card (props){
  const [signedUrl, setSignedURL] = useState('');

  useEffect(() => {
    async function getSignedURL () {
      if(!props.creator.imageURL) return;
       
      try {
        let filePath; 
        if(props.creator.imageURL.includes('supabase.co')){
           filePath = props.creator.imageURL.replace(
            'https://abc123.supabase.co/storage/v1/object/public/creators/', 
            ''
          )
        }
        else{
          filePath = props.creator.imageURL
        }
       
        console.log("Using file path for signed URL:", filePath);

        const { data, error} = await supabase.storage.from("creators").createSignedUrl(filePath, 60 * 60);

        if(error){
          throw error
        }
        setSignedURL(data.signedUrl)
        console.log("Signed URL created:", data.signedUrl);
      } catch (error) {
        console.error('Error creating signed URL:', error.message);
        setSignedURL(props.creator.imageURL)
      }
    }
    getSignedURL()
  }, [props.creator.imageURL])


  const navigate = useNavigate();
    
    const navigateToEditCreator = () =>{
        navigate(`/editCreator/${props.creator.name}`)
      };
    const navigateToViewCreator = () =>{
        navigate(`/viewCreator/${props.creator.name}`)
      };

      console.log(props.creator.imageURL)
    
    return(
        <div className="block p-6 w-fit bg-blue-900 rounded-lg border border-grey-200 shadow-md py-15 m-10 mx-auto">
            <label className="pb-10">
            <h1 className="text-3xl font-bold pb-5">{props.creator.name}</h1>
            </label>
            <label>
            <h2 className="pb-5">{props.creator.url}</h2>
            </label>
            <p className="font-semibold pb-5">{props.creator.description}</p>
            <img src = {signedUrl || props.creator.imageURL} alt={props.creator.name || "Card Image"} />
            <div className="space-x-4">
            <button onClick={navigateToEditCreator}>Edit Creator</button>
            <button onClick={navigateToViewCreator}>View Creator</button>
            </div>
        </div>
    )
}

export default Card;