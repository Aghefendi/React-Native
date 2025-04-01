import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './DetailHeaderCs'

const DetailHeader = ({data}) => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.locations}  >
                    <Text style={styles.header}>Locations: {data.locations[0].name}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Job Level: </Text>
                <Text style={styles.locations}>{data.levels[0].name}</Text>
            </View>
            <Text style={styles.jobDetail}>Job Detail</Text>
    </View>
  )
}

export default DetailHeader