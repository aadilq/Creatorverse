import { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { useParams } from 'react-router-dom';



function ViewCreator(){
    const [contentCreator, SetContentCreator] = useState([]);
    const { id } = useParams();
    

    useEffect(() => {
        async function getContentCreator() {
            const { data } = await supabase.
            from("creators").
            select('*')
            .eq("id", id)
            .single()
            SetContentCreator(data)
        }

        if(id){
            getContentCreator()
        }
    }, [id])




    if(!contentCreator){
        return(
            <div>
                <h1>Creator Not Found</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>{contentCreator.name}</h1>
            <h2>{contentCreator.url}</h2>
            <p>{contentCreator.description}</p>
            <p>{contentCreator.imageURL}</p>
        </div>
    )
    
}

export default ViewCreator