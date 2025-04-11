import { View, Text } from 'react-native'
import React from 'react'
import styles from  './DetailCs'

const DetailHeader = ({data}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.name}>{data.name}</Text>
       <Text style={styles.location}>Location:{data.locations[0].name}</Text>
      <Text style={styles.level}>Job Level: {data.levels[0].name}</Text>
      <Text style={styles.jobdes}>Job Description</Text>
      
    </View>
  )
}

export default DetailHeader

