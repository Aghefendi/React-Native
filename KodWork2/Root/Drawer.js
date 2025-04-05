import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Stacker from './Stacker'
import Favori from '../Pages/Favorite/Favorite'

const Drawer = () => {

    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Job" component={Stacker} />
        <Drawer.Screen name="Favori" component={Favori} />
    </Drawer.Navigator>
  )
}

export default Drawer