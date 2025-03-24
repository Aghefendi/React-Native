import styles  from "./CategoryCs";
import {React,useState,useEffect} from "react";
import { View, Text,FlatList } from "react-native";
import CategoryCard from "../../Component/CategoryCard";
import axios from "axios";

const Category = () => {
    const [data, setData] = useState([]);

    const fetchData =async () => {
        
        try {
            const response= await  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            
            setData(response.data.categories);
            
           
        } catch (error) {

            console.log(error);
        }
     
       
    };
 
    useEffect(() => {
        fetchData();
      }, []);


const RenderCategory = ({item}) => {
    return (
        <CategoryCard category={item}/>
    )};
  return (
  
    <View style={styles.container}>
       <FlatList
       data={data}
       renderItem={RenderCategory}  
       keyExtractor={(item)=>item.idCategory}
       
       />
     </View>
  );
}
export default Category;