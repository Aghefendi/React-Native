import { Text, View } from 'react-native';
import React from 'react';
import styles from './ProductCs';
import Config from 'react-native-config';

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Selam ={Config.EXPO_PUBLIC_API_URL}</Text>
    </View>
  );
};

export default Product;

