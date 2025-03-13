import { StyleSheet, Text, View,SafeAreaView,FlatList,TextInput} from 'react-native'
import React from 'react'
import pakitaStore from './src/pakitaStore.json'
import NewCard from './Component/NewCard'



const App = () =>{


  


  return (
    <SafeAreaView style={styles.container}>

      <Text style={{textAlign:'left', fontSize:20, color:'purple', fontWeight:'bold'}}> Patika Store </Text>

     <TextInput clearButtonMode='always' defaultValue='Ara..' clearTextOnFocus  style={{backgroundColor:'lightgray', width:'100%', alignItems:'center', borderRadius:10  }}/>

    <FlatList

    data={pakitaStore}
    renderItem={({item})=><NewCard news={item}/>}
    numColumns={2}
    />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
container:{
backgroundColor:'white',
flex:1,
marginTop:60,
marginLeft:10,
marginRight:10,


justifyContent:'center',








}


})