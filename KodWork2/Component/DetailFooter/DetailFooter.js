import { View,TouchableOpacity,Text } from 'react-native'
import React from 'react'
import styles from './DetailFooterCs'

const DetailFooter = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.submit}><Text>Submit</Text></TouchableOpacity>
    <TouchableOpacity style={styles.Favorite}><Text>Favorite</Text></TouchableOpacity>
    </View>
  )
}

export default DetailFooter