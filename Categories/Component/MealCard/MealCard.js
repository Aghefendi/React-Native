import {  Text, View,Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const MealCard = ({item,onSelected})=> {   
  return (  
    <TouchableWithoutFeedback onPress={onSelected}>           
    <View style={styles.container}>
       
      <Image source={{uri:item.strMealThumb}} style={styles.image}/>
      <Text style={styles.text}>{item.strMeal}</Text>
      
    </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard

