import { Text, View,TouchableWithoutFeedback,Image } from 'react-native';
import React from 'react';
import styles from './CategoryCardCs';

const CategoryCard = ({category,onSelect }) => {

    
  return (
   
   
      <TouchableWithoutFeedback onPress={onSelect }  >
        <View style={styles.container}>
        <Image source={{uri:category.strCategoryThumb}} style={styles.image}/>
      <Text style={styles.text}>{category.strCategory}</Text>
     
    
      </View>
      </TouchableWithoutFeedback>
    
      
    
    
  )
}

export default CategoryCard;

