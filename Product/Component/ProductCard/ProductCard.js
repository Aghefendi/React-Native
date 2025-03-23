import {  Text, View,Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './ProductCardCs'

const ProductCard = ({product,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
      <Image style={styles.imagecs}  source={{uri: product.image}} />
      <View style={styles.bodycontainer}>
        <Text  style={styles.title}>{product.title}</Text>
        <Text  style={styles.price}>{product.price} TL</Text>

      </View>
      
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ProductCard

