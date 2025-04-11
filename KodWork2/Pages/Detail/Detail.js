import { View, Text,FlatList,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import styles from './DetailCs'
import useFetch from '../../Hooks/useFetch'
import RenderHTML from 'react-native-render-html'
import DetailHeader from '../../Component/DetailHeader'
import DetailFooter from '../../Component/DetailFooter'




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
 
  return (
   <View>
    <ScrollView style={styles.scroll}>
    <DetailHeader  data={data}/>
 
 
    <RenderHTML contentWidth={width} source={{html: content}} style={styles.renderCs} />

    <DetailFooter/>
 
    </ScrollView>
    
    </View>
   
  
   
  )
}

export default Detail