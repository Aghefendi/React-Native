import { View, Text,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './JobCardCs'

import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../context/Slice'

const JobCard = ({item, Handleonpress,customButton}) => {
  const dispatch = useDispatch()
  const removeFavoriteJob = (id) => {
    dispatch(removeFavorite(id))
}
  return (
    <View>

    <TouchableOpacity style={styles.card} onPress={Handleonpress}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardBody}>{item.company.name}</Text>
        <View style={styles.locationContainer}>
            <Text style={styles.location}>{item.locations[0].name} </Text>
        </View>
        <View style={styles.levelContainer}>
            <Text style={styles.level} >{item.levels[0].name}</Text>
        </View>
        {customButton && <View style={styles.customButton}><Button title={customButton} onPress={() => removeFavoriteJob(item.id)} /></View>}
    </TouchableOpacity>
</View>
  )
}

export default JobCard