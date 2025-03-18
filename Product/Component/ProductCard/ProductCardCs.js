import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
   
     backgroundColor:'lightgray',
     flexDirection:'row',
     borderWidth:1,
    
     margin:10
   
    
     
       
    },
    imagecs:{
        minHeight:100,
        width:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    bodycontainer:{
       flex:1,
       padding:10,
       margin:5,
       justifyContent:'space-between'
      
    
    },
    title:{
        fontWeight:'bold',
        fontSize:18

    },
    price:{
textAlign:'right',
        fontSize:16
    }


})