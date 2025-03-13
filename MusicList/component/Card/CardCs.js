import { StyleSheet,Dimensions } from "react-native";

export default  StyleSheet.create({

Container:{
    padding:10,
    flexDirection:'row',
},
Title:{
fontSize:20,
fontWeight:'bold'


},
Image:{
    width:100,
    height:100,
    borderRadius:50,
},
innerContainer:{padding:10,flex:1,justifyContent:'center'},
infosong:{flexDirection:'row',flex:1,alignItems:'center'},
years:{marginLeft:10,color:'gray', fontWeight:'bold'},
soldContainer:{borderWidth:1,borderBlockColor:'red',padding:'5',borderRadius:5},
sold:{fontWeight:'bold',color:'red'},
ContextContainer:{flexDirection:'row'}



    
});