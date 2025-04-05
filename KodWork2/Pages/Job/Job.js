import { View, Text,FlatList } from 'react-native'
import React from 'react'

import useFetch from '../../Hooks/useFetch'
import Card from '../../Component/Card'

const apiUrl = 'https://www.themuse.com/api/public/jobs?page=1'

const Job = () => {
    const { data, error, loading } = useFetch(apiUrl)
    console.log(data.results)
   
    if (loading) {
        return (
        
        <Text>Loading...</Text> 
        ) 
    }
    if (error) {
        return <Text>Error: {error.message}</Text>
    }
   

   const RenderCard = ({ item }) => { return <Card item={item} /> }
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