import { useState } from "react";
import { supabase } from "../client";

function AddCreator(){
    const [formData, setFormData] = useState({
        name: '', 
        url: '', 
        description: '', 
        imageURL: ''
    });
    
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            console.log("Submitting formData:", formData);
            const { data, error } = await supabase.from('creators') .insert([formData]).select();
            console.log("Insert result:", { data, error });

            if (error) {
              throw error;
            }
            // console.log('Data inserted successfully:', data);
            // setFormData({ name: '', email: '', message: '' }); 
          } catch (error) {
            console.error('Error inserting data:', error.message);
          }
    }

return(
    <div>
    <div className="py-10">
        <h2 className="">Add a New Content Creator</h2>
    </div>
    <div className="pl-10">
        <form onSubmit={handleSubmit}>
        <label>Name
                <input
                name = "name"
                value={formData.name}
                onChange={handleChange}
                className="w-100 h-12 border border-gray-300 rounded-lg p-2 mx-4"
                type="text"
                placeholder="Name"
                />
            </label>
            <label>URL
                <input
                name = "url"
                value={formData.url}
                onChange={handleChange}
                className="w-96 h-13 border border-gray-300 rounded-lg p-4 mx-4"
                type="text"
                placeholder="URL (Youtube, Twitter, Or Instagram)"
                />
            </label>
            <label>Description
                <input
                name = "description"
                value={formData.description}
                onChange={handleChange}
                className="w-96 h-13 border border-gray-300 rounded-lg p-4 mx-4"
                type="text"
                placeholder="Description"
                />
            </label>
            <label>Image URL
                <input
                name = "imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                className="w-96 h-13 border border-gray-300 rounded-lg p-4 mx-4"
                type="text"
                placeholder="Image URL"
                />
            </label>
            <div className="pt-8">
            <button className="rounded hover:rounded-lg">Submit</button>
            </div>
        </form>
    </div>
</div>
)};


export default AddCreator

/*
     <form onSubmit={handleSubmit}>
            <label>Name
                <input
                className="w-100 h-12 border border-gray-300 rounded-lg p-2 mx-4"
                type="text"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                />
            </label>
            <label>URL
                <input
                className="w-96 h-12 border border-gray-300 rounded-lg p-2 mx-4"
                type="text"
                placeholder="Social Media (YouTube, Twitter, or Instagram)" 
                value = {formData.URL}
                onChange={handleChange}
                />
            </label>
            <label>Description
                <input
                 className="w-100 h-12 border border-gray-300 rounded-lg p-2 mx-4"
                 type="text"
                 placeholder="Description"
                 value={formData.Description}
                 onChange={handleChange}/>
            </label>
            <label>ImageURL
                <input
                 className="w-100 h-12 border border-gray-300 rounded-lg p-2 mx-4"
                 type="text"
                 placeholder="ImageURL"
                 value={formData.ImageURL}
                 onChange={handleChange}/>
            </label>
            <button>Submit</button>
        </form>
*/