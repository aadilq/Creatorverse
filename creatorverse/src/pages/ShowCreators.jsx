import { useState, useEffect } from "react"
import { supabase } from "../client"
import { useRoutes } from "react-router-dom";
import Card from "../components/Card";

function ShowCreator(){
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        getCreators()
    }, [])

    async function getCreators() {
        const { data } = await supabase.from("creators").select()
        setCreators(data)
        console.log(creators)
    }

    const routes = useRoutes([
        {
            path: "/",
            element : creators.length > 0 ? (
                <div>
                    {creators.map((creator) => (
                        <Card key = {creator.name} creator = {creator} />
                    ))}
                </div>
            )
            :
            (
                <h1>No Creators Yet 😞</h1>
            )
        }
    ])
    
    return(
        <div className="">
        <h1>View All of the different content creators</h1>
        {routes}
        </div>
    )
}

export default ShowCreator