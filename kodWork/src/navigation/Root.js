import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawnav from './Drawnav'

const Root = () => {
  return (
    <NavigationContainer>

    <Drawnav/>

    </NavigationContainer>
  )
}

export default Root