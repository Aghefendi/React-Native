import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Input from '../Component/Input'
import Button from '../Component/Button';



const Signup = ({navigation}) => {

  const [name, setname] = useState(null);
  const [soyad, setsoyad] = useState(null);
  const [email, setemail] = useState(null);

  function Yazdir(){
    const user={
      name:name,
      soyad:soyad,
      email:email



    };

    navigation.navigate("Knowledge",{user})

  }

  return (
  <SafeAreaView style={styles.container}>
      <Text>Signup</Text>
      <Input
      name='isim'

      textInput={setname}
      
      
      />
       <Input
      name='soyadı'
     
      textInput={setsoyad}
      
      
      />
       <Input
      name='eposta'
      
      textInput={setemail}
      
      
      />
      <Button   text="Kaydet" handleonButton={Yazdir}/>
      
      </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
container:{
margin:25,
marginTop:50,
justifyContent:'center',
alignItems:'center'

}


})