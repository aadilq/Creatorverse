import { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ViewCreator(){
    const [contentCreator, SetContentCreator] = useState(null);
    const { creatorID } = useParams();

    const navigate = useNavigate();

    const navigateToEditCreator = () =>{
        navigate(`/editCreator/${creatorID}`)
      };
    
    useEffect(() => {
        async function getContentCreator() {
            const { data } = await supabase.
            from("creators").
            select('*')
            .eq("name", creatorID)
            .limit(1)

            SetContentCreator(data[0])
        }

        if(creatorID){
            getContentCreator()
        }
    }, [creatorID])
    if(!contentCreator){
        return(
            <div>
                <h1>Creator Not Found</h1>
            </div>
        )
    }

    return(
        <div>
            <h1> <span>Name: </span>{contentCreator.name}</h1>
            <h2> <span className='font-bold'>Social Media URL: </span>{contentCreator.url}</h2>
            <p> <span className='font-bold'>Description: </span>{contentCreator.description}</p>
            <p> <span className='font-bold'>Image URL: </span>{contentCreator.imageURL}</p>
            <button onClick={navigateToEditCreator}>View Creator</button>
        </div>
    )
    
}

export default ViewCreator