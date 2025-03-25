import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Category from '../pages/Category/Category'
import Details from '../pages/Details/Details'
import Meal from '../pages/Meal/Meal'

const Root = () => {
    const Stact=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stact.Navigator options={{headerShown: true}}>
        <Stact.Screen name="Category" component={Category} options={{headerTitleAlign:'center'}}/>
        <Stact.Screen name="Details" component={Details}  options={{headerTitleAlign:'center'}}/>
        <Stact.Screen name="Meal" component={Meal}  options={{headerTitleAlign:'center'}}/>
      </Stact.Navigator>
    </NavigationContainer>
  )
}

export default Root;

