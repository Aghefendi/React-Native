import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
    flex:1,
      margin:10,
      borderWidth:1,
      borderRadius:10, 
      padding:10, 
    },
    name:{
      fontSize:20,
      fontWeight:'bold',
      color:'black',
      margin:5,

    },
    level:{
      fontSize:18,
      color:'red',
      textAlign:'right',
      margin:5,
   

      
    },
    location:{
      fontSize:16,
      color:'white',
      borderWidth:1,
      width:150,
      alignItems:'center',
      borderRadius:10,
      backgroundColor:'red',
      margin:5,
      justifyContent:'center'
    },
    company:{
      fontSize:16,
      color:'black',
      margin:5,
    },
    
})