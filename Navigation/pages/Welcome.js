import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Button from '../Component/Button'



const Welcome = ({navigation}) => {

    function GotoPage (){

        navigation.navigate('SignUp');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>Welcome</Text>
      <Button text='İkinci sayfaya geçiş' handleonButton={GotoPage} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({

container:{
    flex:1,
    marginTop:30,
   justifyContent:'center',
    backgroundColor:'white',
    alignItems:'center'
    
},
Welcome:{
fontSize:40,
margin:20



}
})