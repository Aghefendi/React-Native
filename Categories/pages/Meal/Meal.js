import { View, Text,ActivityIndicator,Image, FlatList, Button,Linking} from 'react-native'
import React from 'react'
import styles from './MealCs'
import useFetch from '../../hook/useFetch'

const Meal = ({route}) => {
    const {strMeal} = route.params;
  

    const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+strMeal;
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
    const handleWatchVideo = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

  return (
    <View style={styles.container}>
        <FlatList 
        data={data1}    
        renderItem={({item})=>(
            <View style={styles.container}>
                <Image source={{uri:item.strMealThumb}} style={styles.image}/>
                <Text style={styles.text1}>{item.strMeal}</Text>
                <Text style={styles.text}>{item.strInstructions}</Text>
                <Button title="Watch Videos"  onPress={() => handleWatchVideo(item.strYoutube)}/>
            </View>
        )}
        keyExtractor={item => item.idMeal}
        />
    </View>
  )
}

export default Meal