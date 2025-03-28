import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../Pages/Product';
import Details from '../Pages/Details';
import Login from '../Pages/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Root = () => {
  const userSession = useSelector((state) => state.user.user);
  const isAuthLoading = useSelector((state) => state.user.isAuthLoading);

  if (isAuthLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    ); // Display a loading screen while checking authentication status
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {!userSession ? (
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              title: 'Login',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: 'lightgray' },
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ProductPage"
              component={Product}
              options={{
                title: 'Dükkan',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'lightgray' },
                headerTitleStyle: { color: 'white', fontSize: 20 },
              }}
            />
            <Stack.Screen
              name="DetailsPage"
              component={Details}
              options={{
                title: 'Detay',
                headerStyle: { backgroundColor: 'lightgray' },
                headerTitleAlign: 'center',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
