import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  

  container:{
   
    backgroundColor:'white',

    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    
    margin:10,
    padding:10,
    borderRadius:10,
    borderColor:'black',
    justifyContent:'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


    
   
  },
  image:{
    width:100,
    height:100,
    borderRadius:50,
    
  } ,
  text:{
    fontSize:20,
    fontWeight:'bold',
  }
   
});
// Compare this snippet from pages/Home/HomeCs.js: