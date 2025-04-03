import { View, Text,TextInput,Button } from 'react-native'
import React from 'react'
import styles from './FooterCs'


export default function Footer({ setUpdate, text, settext }) {
  return (
    <View style={styles.container}>
    <TextInput style={styles.TextInputCss}  onChangeText={settext} value={text}  placeholder="Enter a task"/>
    <Button style={styles.ButtonCss} title='Kaydet'  onPress={setUpdate} />
  </View>
  )
}