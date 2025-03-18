import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../Pages/Product';
import Details from '../Pages/Details'

const Stack=createNativeStackNavigator();

const Root = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='ProductPAge' component={Product}/>
        <Stack.Screen name='DetailsPage' component={Details}/>


    </Stack.Navigator>



   </NavigationContainer>
  )
}

export default Root

