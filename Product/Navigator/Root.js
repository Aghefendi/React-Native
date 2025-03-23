import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../Pages/Product';
import Details from '../Pages/Details'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack=createNativeStackNavigator();

const Root = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name='ProductPAge' component={Product} options={{title:'Dükkan', headerTitleAlign:'center',headerStyle:{backgroundColor:'lightgray'},
      
        headerTitleStyle:{color:'white',fontSize:20},
      }}/>
        <Stack.Screen name='DetailsPage' component={Details} options={{title:'Detay',headerStyle:{backgroundColor:'lightgray'},headerTitleAlign:'center'}}/>


    </Stack.Navigator>



   </NavigationContainer>
  )
}

export default Root

