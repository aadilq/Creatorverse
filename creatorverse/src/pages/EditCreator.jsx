import { useState, useEffect } from "react";
import { supabase } from "../client"
import {useParams } from 'react-router-dom';


function EditCreator(){
    const [formData, setFormData] = useState({
        name: '', 
        url: '', 
        description: '', 
        imageURL: ''
    });

    const { creatorID } = useParams();


    useEffect(() => {

        const fetchContentCreator = async () => {
            console.log("User ID: ", creatorID)
            console.log('Fetching user with ID:', creatorID)
            const { data, error} = await supabase.
            from("creators").
            select('*')
            .eq("name",creatorID)
            .limit(1)

            console.log('Supabase response:', { data, error })
            if(error){
                console.error("error fetching data:", error.message);
            }
            else if(data && data.length > 0 && data[0]){
                console.log("Successfully retrieved form data", data)
                setFormData({
                    name: data[0].name || 'Fallback', 
                    url: data[0].url || '',
                    description: data[0].description, 
                    imageURL: data[0].imageURL || ''
                })
            }
            else{
                console.log('No information found for', creatorID)
            }
        }
        fetchContentCreator()
    }, [creatorID]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error } = await supabase.from("creators")
        .update(formData).eq("name", creatorID)

        if(error){
            console.error('Error updating record:', error.message);
        }
        else{
            console.log('Record updated successfully!');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                name="name"
                type="text"
                value={formData.name  || ''}
               onChange={handleChange}
               />
            </label>
            <label>
                URL:
                <input
                name="url"
                type="text"
                value={formData.url  || ''}
                onChange={handleChange}
                />
            </label>
            <label>
            Description:
                <input className=""
                type="text"
                name="description" 
                value={formData.description  || ''}
                onChange={handleChange}
                />
            </label>
            <label>
            Image URL:
                <input
                type="text"
                name="imageURL" 
                value={formData.imageURL || ''}
                onChange={handleChange}            
                />
            </label>
            <button className="rounded hover:rounded-lg">Save Changes</button>
        </form>
    )

};
export default EditCreator