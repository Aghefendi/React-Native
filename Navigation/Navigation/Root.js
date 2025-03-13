import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Signup from '../pages/Signup';
import Knowledge from '../pages/Knowledge';

const Stackt=createNativeStackNavigator();

const Root =() =>{

  return (
    <NavigationContainer styles={styles.container}>
           <Stackt.Navigator screenOptions={{headerShown:false}}>
            <Stackt.Screen name='Welcome' component={Welcome} />
            <Stackt.Screen name='SignUp' component={Signup}/>
            <Stackt.Screen name='Knowledge' component={Knowledge}/>
           </Stackt.Navigator> 


    </NavigationContainer>

 
    
 
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });

export default Root

