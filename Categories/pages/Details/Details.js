import { StyleSheet, Text, View,ActivityIndicator, Image, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch';
import MealCard from '../../Component/MealCard';


const Details = ({route,navigation}) => {
  const {strCategory} = route.params;
  

  const api = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory;
  
  const { data, loading, error } = useFetch(api);

  const data1=data.meals;


   

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

    handleProductSelected=(id)=>{
      navigation.navigate('Meal',{strMeal:id});
    }
  
    const MealRender = ({item}) => {return <MealCard item={item} onSelected={()=>handleProductSelected(item.strMeal)}/>} ;
  return (
    
      <FlatList 
        data={data1}
        renderItem={MealRender} />
        
        
    

    
      
  
  )
}

export default Details

