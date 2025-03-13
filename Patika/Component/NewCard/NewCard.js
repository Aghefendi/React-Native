import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React from 'react'
import style from './NewCard.style'

const NewCard = ({news}) => {
    
  return (
    <View style={style.container}>
    <View style={style.Inner1}>
       
    <Image style={style.ImageCs} source={{uri: news.imgURL}} />
    
    
    
    </View>
    <Text style={style.TitleCs}>({news.title})</Text>
    <Text>({news.price})</Text>
    <Text style={style.StockCs}>
    {news.inStock ? " " : 'Stokta Yok'}
    </Text>
    </View>
  )
}

export default NewCard

