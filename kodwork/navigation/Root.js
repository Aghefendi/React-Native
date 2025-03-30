import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Jobs from '../pages/Jobs'
import FavoriJobs from '../pages/FavoriJobs'


const Drave=createDrawerNavigator();


export default function Root() {
  return (
    <NavigationContainer>
        <Drave.Navigator>
        <Drave.Screen name='Jobs' component={Jobs}/>
        <Drave.Screen name='favorites' component={FavoriJobs}/>
       
        </Drave.Navigator>

        </NavigationContainer>
        
    
  )
}

