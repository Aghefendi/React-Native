import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './ButtonCs'
import Loading from '../Loading'

const Button = ({text,onPress,loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (<ActivityIndicator size={'large'} />):
      (<Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}>{text}</Text>)
        } 
    </TouchableOpacity>
  )
}

export default Button

