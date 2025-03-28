import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../Pages/Product';
import Details from '../Pages/Details'

import Login from '../Pages/Login';
import { useSelector } from 'react-redux';

const Stack=createNativeStackNavigator();
 

const Root = () => {


  const userSession=useSelector(s=>s.user);
  const AuthLoading=useSelector(s=>s.isAuthLoading);

  return (
   <NavigationContainer>
    
    <Stack.Navigator  screenOptions={{headerShown:true} }>
   {!userSession ? (<Stack.Screen   name= 'LoginPage' component={Login} options={{title:'Login',headerTitleAlign:'center',headerStyle:{backgroundColor:'lightgray',headerShown:false}}}/>) 
      
     :( 
     <>  <Stack.Screen name='ProductPAge' component={Product} options={{title:'Dükkan', headerTitleAlign:'center',headerStyle:{backgroundColor:'lightgray'},
      
        headerTitleStyle:{color:'white',fontSize:20},
      }}/>
        <Stack.Screen name='DetailsPage' component={Details} options={{title:'Detay',headerStyle:{backgroundColor:'lightgray'},headerTitleAlign:'center'}}/>
      </>)}
    
    </Stack.Navigator>



   </NavigationContainer>
  )
}

export default Root

