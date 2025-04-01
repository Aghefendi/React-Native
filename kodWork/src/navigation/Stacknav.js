import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Job from '../pages/Job'
import Detail from '../pages/Detail'


const Stack=createStackNavigator()

const Stacknav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Job' component={Job}/>
        <Stack.Screen name='Detail' component={Detail}/>


    </Stack.Navigator>
  )
}

export default Stacknav