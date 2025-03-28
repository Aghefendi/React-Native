import axios from "axios";
import { useState } from "react";

function usePost(){

    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const post = async (url, apiData) => {
        try {
            setLoading(true); // Set loading to true when the request starts
            const { data: responseData } = await axios.post(url, apiData);
            setData(responseData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // Ensure loading is set to false when the request is complete
        }
    };
return {data,loading,error,post};

}

export default usePost;