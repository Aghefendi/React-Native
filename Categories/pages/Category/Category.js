import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import useFetch from "../../hook/useFetch";
import styles from "./CategoryCs";
import CategoryCard from "../../Component/Categorycard/CategoryCard";


// API URL
const api = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Category = ({navigation}) => {
  // Fetching data using the custom hook
  const { data, loading, error } = useFetch(api);
  const data1=data.categories;
  // Handling the loading state
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Handling error if something goes wrong
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching data: {error.message}</Text>
      </View>
    );
  }
  const handleProductSelect=(id)=>{
    navigation.navigate('Details',{strCategory:id});
  }

  const RenderCategory = ({ item }) => {
    return <CategoryCard category={item} onSelect={()=>handleProductSelect(item.strCategory)}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={RenderCategory}
        
      />
    </View>
  );
};

export default Category;
