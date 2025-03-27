import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './ButtonCs'

const Button = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

