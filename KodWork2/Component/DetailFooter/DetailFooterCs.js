import { StyleSheet,Dimensions } from "react-native";


const dimensitonWidth=Dimensions.get('window').width;

export default StyleSheet.create({

 

container:{



flexDirection:'row',
alignContent:'center',
justifyContent:'space-around'









},
Favorite:{

alignContent:'center',
width:200,
height:50,
borderWidth:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'red',
borderRadius:5

    
},
submit:{

    alignContent:'center',
    width:200,
    height:50,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    borderRadius:5

}




})