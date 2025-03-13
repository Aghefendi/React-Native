import {  Text, View,TextInput } from 'react-native'
import React, {useState} from 'react'
import sytles from './SearchbarCs'

const Searchbar = props => {
    

  return (
    <View>
    < TextInput   
    defaultValue='Search' 
    inputMode='text' 
    clearButtonMode='always' 
    style={sytles.Input}
    onChangeText={props.onSearch}
    />
    </View>
  )
}

export default Searchbar
