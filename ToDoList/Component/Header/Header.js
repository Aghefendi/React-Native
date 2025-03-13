import React from "react";
import { Text,View } from "react-native";
import styles from './Header.css';

const Header=(props)=>{

    return(
        <View style={styles.container}>
            <Text style={styles.textCs}>Yapılacaklar Listesi...</Text>
            <Text style={styles.countCs}> {props.setCount} </Text>


        </View>



    )




};

export default Header;