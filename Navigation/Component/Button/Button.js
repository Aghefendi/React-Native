import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.Css'

const Button=({text,handleonButton}) =>{
  return (
    <TouchableOpacity onPress={handleonButton} style={styles.container}>
        <Text style={styles.ButtonText}>{text}</Text>

    </TouchableOpacity>
  )
}

export default Button