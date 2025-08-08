import { useState, useEffect } from "react";
import { supabase } from "../client"


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

};
export default EditCreator