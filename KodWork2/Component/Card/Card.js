import { View, Text } from 'react-native'
import React from 'react'
import styles from './CardCs'

const Card = ({item}) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.levels[0].name}</Text>
      <Text >{item.locations[0].name}</Text>
      <Text style={styles.title}>{item.company.name}</Text>
     
     
    </View>
  )
}

export default Card