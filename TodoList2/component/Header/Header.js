import { View, Text } from 'react-native'
import React from 'react'
import styles from './HeaderCs'

export default function Header({setCount}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textCs}>Yapılcaklar Listesi</Text>
      <Text style={styles.countCs}>{setCount}</Text>
    </View>
  )
}