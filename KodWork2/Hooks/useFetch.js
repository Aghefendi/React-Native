import axios from "axios";
import { useState,useEffect, use } from "react";


function useFetch(url) {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
  };
  useEffect(() => { 
    fetchData();
  }
  , []);
  return { data, loading, error };

 
}
export default useFetch;
