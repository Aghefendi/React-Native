import { StyleSheet } from "react-native";


export default StyleSheet.create({

container:{
    flex:1,
    padding:10,
    margin:5,
    backgroundColor:'lightgray'


},
Imagecs:{
    minHeight:300,
    resizeMode:'contain',
    backgroundColor:'white'
},
title:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:10
},
desc:{
    fontSize:20,
    marginVertical:10,

    textAlign:'justify',
    lineHeight:30,

},
price:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'right',
    marginVertical:10
}

}


);