import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'
import Ionicons from '@expo/vector-icons/Ionicons';

const Input = ({placeholder, onType,value,iconName,isSecure}) => {
  return (
    <View style={styles.container} >
      <Ionicons name={iconName} size={24} color="black" />
      <TextInput placeholder={placeholder} 
      onChangeText={onType} 
      
      value={value}
      
      
      secureTextEntry={isSecure}/> 
    </View>
  )
}

export default Input
