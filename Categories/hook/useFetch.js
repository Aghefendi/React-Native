import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setData(responseData.categories); // Assuming the API returns a 'categories' field
    } catch (error) {
      setError(error); // Set error if there was an issue
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched or error occurs
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Ensure it only runs on component mount or if URL changes

  return { data, loading, error };
}

export default useFetch;