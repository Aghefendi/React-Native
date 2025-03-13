import { View, Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from './Card.css';  // Ensure that the styles are correct

const Card = (props) => {
  // Destructuring the setTodo prop to get the title
    const [hello, setHello] = useState(true);
  
  function updateFlag(){

    setHello(!hello);

  }


  return (
    <View style={hello?styles.container : styles.container1}>
      <TouchableOpacity onPress={updateFlag}>
      <Text style={hello?styles.txtbox:styles.txtbox1 }> {props.task } </Text> 
      </TouchableOpacity>
    </View>
  )
};

export default Card;
