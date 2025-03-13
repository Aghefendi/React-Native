import React from "react";
import { View, TextInput } from "react-native";
import styles from './Input.Css'

const  Input=({textInput,name})=>{

return(
        <View style={styles.container}>
            <TextInput  style={styles.input}
            onChangeText={textInput}
            placeholder={name}

            />


        </View>


)



}
export default Input;