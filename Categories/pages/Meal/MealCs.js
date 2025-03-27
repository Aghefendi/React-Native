import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWeight = Dimensions.get('window').width;
export default styles = StyleSheet.create({ 
    container: {
     
        backgroundColor: 'yellow',
      
        alignItems:'center',
       
        
        margin:2,
        
        
    },    
    image:{
        width: 400,
        height: 400,
        resizeMode:'container',
        
    },
        text:{
            fontSize:15,
            color:'black',
            fontStyle:'italic',
           
            

        },
        text1:{
            fontWeight:'bold',
            fontSize:25,
            color:'red',
            textAlign:'center'



        }
    });