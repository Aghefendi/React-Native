import { StyleSheet, Text, View,ActivityIndicator, Image, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch';


const Details = ({route}) => {
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
  

  return (
    <View style={styles.container}>
      <FlatList 
        data={data1}
        renderItem={({item})=>(
          <View style={styles.card}>
            <Image source={{uri:item.strMealThumb}} style={styles.image}/>
            <Text style={styles.text}>{item.strMeal}</Text>
          </View>
        )}
      />
        
        
        </View>


    
      
  
  )
}

export default Details

