import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch';

const Details = ({route}) => {
  const {strCategory} = route.params;
  console.log(strCategory);

  
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/categories.php?c=${strCategory}`);
 

  return (
    <View style={styles.container}>
      <Text>{data.strCategoryDescription}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})