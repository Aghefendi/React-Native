import { View, Text,FlatList,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import styes from './DetailCs'
import useFetch from '../../Hooks/useFetch'
import RenderHTML from 'react-native-render-html'


const Detail = ({route,navigation}) => {

  const { width } = Dimensions.get('window')

  const { id } = route.params
 
  const apiUrl = `https://www.themuse.com/api/public/jobs/${id}`
  const { data, error, loading } = useFetch(apiUrl)

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (error) {
    return <Text>Error: {error.message}</Text>
  }
  if (!data) {
    return <Text>No data found</Text>
  }
  
  const content=data.contents
  console.log(content)
  return (
    <ScrollView style={styes.container}>  
    <RenderHTML contentWidth={width} source={{html: content}} />
   
 

    </ScrollView>
  )
}

export default Detail