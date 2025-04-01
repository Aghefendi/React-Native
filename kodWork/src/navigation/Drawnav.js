import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from 'react-native'
import React from 'react'
import Stacknav from "./Stacknav";
import Favorite from "../pages/Favorite";

const Drawn=createDrawerNavigator()

export default function Drawnav() {
  return (
    <Drawn.Navigator>
        <Drawn.Screen name="JobHome" component={Stacknav}/>
        <Drawn.Screen name="Favorites" component={Favorite}/>


    </Drawn.Navigator>
  )
}