import axios from "axios";
import { useState,useEffect } from "react";


function useFect(url){
    
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    const [data, setdata] = useState([])

      const fetctdata= async()  =>{
        try {
            const {data:responsedata} = await axios.get(url);
            setdata(responsedata)
            setloading(false)

        } catch (error) {
            seterror(error)
            console.log(error)
            setloading(false)
            
        }

      }
      useEffect(()=>{fetctdata()},[]);
      

      return {data,loading,error} ;


    }

    export default useFect;