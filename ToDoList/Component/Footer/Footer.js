import { View, Text,TextInput,TouchableOpacity, Button} from 'react-native';
import React from 'react';
import styles from './Footer.css';

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInputCss}  onChangeText={props.settext} value={props.text}  placeholder="Enter a task"/>
      <Button style={styles.ButtonCss} title='Kaydet'  onPress={props.setUpdate} />
    </View>
  )
}

export default Footer;