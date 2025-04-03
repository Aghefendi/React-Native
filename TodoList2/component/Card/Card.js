import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CardCs'

export default function Card({task, removeTask}) {
  return (
    <View style={{ padding: 10, backgroundColor: '#fff', marginBottom: 10 }}>
    <Text>{task.text}</Text>
    <TouchableOpacity onPress={() => removeTask(task.id)}>
      <Text style={{ color: 'red' }}>Sil</Text>
    </TouchableOpacity>
  </View>
  )
}