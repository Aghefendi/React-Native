import { useEffect,useState } from "react";
import axios from "axios";

function useFetch(url){

const [error , seterror]=useState(null)
const [loading,setloading]=useState(true);
const [data, setdata] = useState([]);

const fetctData= async()=>{

    try {
      const {data:responsedata}= await axios.get(url);
      setdata(responsedata);
      setloading(false);
     
    } catch (err) {
      seterror(err.message);
      setloading(false);
  
  
    }
  
  
  }

    useEffect(()=>{fetctData();},[]);


    return {error,loading,data};
}

export default useFetch;