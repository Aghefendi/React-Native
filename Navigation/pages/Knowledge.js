import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Knowledge = ({route}) => {
    const {user}=route.params;
  return (
    <View style={styles.container} >
        <Text style={styles.text}>Hoş geldiniz...</Text>
      <Text style={styles.text}> Adı :{user.name}</Text>
      <Text style={styles.text}>Soyadı :{user.soyad}</Text>
      <Text style={styles.text}>Email :{user.email}</Text>
    </View>
  )
}

 const styles= StyleSheet.create({
container:{
    flex:1,
    padding:10,
   justifyContent:'center',
    paddingHorizontal:10

},
text:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue'
    

}



})

export default Knowledge;


