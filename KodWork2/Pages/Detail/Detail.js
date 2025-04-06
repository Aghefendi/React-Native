import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styes from './DetailCs'
import useFetch from '../../Hooks/useFetch'

const Detail = ({route,navigation}) => {

  const { id } = route.params
  const apiUrl = `https://www.themuse.com/api/public/jobs/${id}`
  const { data, error, loading } = useFetch(apiUrl)
  console.log(data)
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
  
  return (
    <View style={styes.container}>
      <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>{item.name}</Text>
        
        </View>
      )}
      
      />
    </View>
  )
}

export default Detail