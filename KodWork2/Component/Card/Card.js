import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CardCs'

const Card = ({item,HandleonPress}) => {
    
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{HandleonPress(item.id)}}>
      <Text style={styles.name}>{item.name}</Text>
      
      <Text style={styles.location}>{item.locations[0].name}</Text>
      <Text style={styles.company}>{item.company.name}</Text>
      <Text style={styles.level}>{item.levels[0].name}</Text>
     
     </TouchableOpacity>
    </View>
  )
}

export default Card