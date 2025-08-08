import { useState, useEffect } from "react";
import { supabase } from "../client"
import { useParams } from 'react-router-dom';


function EditCreator(){
    const [formData, setFormData] = useState({
        name: '', 
        url: '', 
        description: '', 
        imageURL: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchContentCreator = async () => {
            try{
                setLoading(true);
                const { data, error} = await supabase
                .from("creators")
                .select("*")
                .eq("id", id)
                .single()

                if(error){
                    throw error;
                }
                if(data){
                    setFormData(data);
                }
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        if(id){
            fetchContentCreator()
        }
    }, [id])

    if(loading){return <p>Loading Profile</p>}
    if(error){return <p>'Error', {error}</p>}
    return(
        <form>
            <label>
                Name:
                <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </label>
            <label>
                URL:
                <input
                type="text"
                value={formData.url}
                onChange={(e) => setFormData({...formData, url: e.target.value})}
                />
            </label>
            <label>
            Description:
                <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
            </label>
            <label>
            Image URL:
                <input
                type="text"
                value={formData.imageURL}
                onChange={(e) => setFormData({...formData, imageURL: e.target.value})}
                />
            </label>
            <button className="rounded hover:rounded-lg">Save Changes</button>
        </form>
    )

};
export default EditCreator