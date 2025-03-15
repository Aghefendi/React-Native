import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Text>{props.username}</Text>

      <View style={styles.innercontainer}>
        <Text>{props.name}</Text>
        <Text style={{fontWeight:'bold', padding:5 , fontStyle:'italic'}}>{props.email}</Text>


      </View>
    </View>
    
  )
}

export default UserCard

const styles = StyleSheet.create({

container:{
    flex:1,
    borderWidth:1,
    backgroundColor:'lightgray',
    marginVertical:5,
    alignItems:'center',
    justifyContent:'center',
    padding:5,
},
innercontainer:{
    flexDirection:'row',
    borderWidth:1,
    margin:5
}

})