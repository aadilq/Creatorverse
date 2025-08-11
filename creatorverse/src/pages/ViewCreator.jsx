import { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { useParams } from 'react-router-dom';

function ViewCreator(){
    const [contentCreator, SetContentCreator] = useState(null);
    const { creatorID } = useParams();

    
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
            <h2> <span>Social Media URL: </span>{contentCreator.url}</h2>
            <p> <span>Description: </span>{contentCreator.description}</p>
            <p> <span>Image URL: </span>{contentCreator.imageURL}</p>
        </div>
    )
    
}

export default ViewCreator