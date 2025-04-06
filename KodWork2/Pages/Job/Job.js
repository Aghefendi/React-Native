import { View, Text,FlatList } from 'react-native'
import React from 'react'

import useFetch from '../../Hooks/useFetch'
import Card from '../../Component/Card'

const apiUrl = 'https://www.themuse.com/api/public/jobs?page=1'

const Job = ({navigation}) => {
    const { data, error, loading } = useFetch(apiUrl)
   
    if (loading) {
        return (
        
        <Text>Loading...</Text> 
        ) 
    }
    if (error) {
        return <Text>Error: {error.message}</Text>
    }
   
 function HandleonPress(id) {
        // console.log(id)}){
        navigation.navigate('Detail', {id})
    }
    // const HandleonPress = (item) => {
    //     navigation.navigate('Detail', {item})
   const RenderCard = ({ item }) => { return <Card item={item} HandleonPress={HandleonPress} /> }
    // const RenderCard = ({ item }) => {
  return (
    
  <FlatList
  data={data.results}
  renderItem= {RenderCard}
  
  keyExtractor={(item) => item.id.toString()}   


  />
  
  )
}

export default Job