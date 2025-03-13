import { Text, View,Image } from 'react-native'
import React, {useState} from 'react'
import styles from './CardCs'

const Card = ({news}) => {
  const [CheckSold, setCheckSold] = useState(false)


  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={{uri: news.imageUrl}} />

      <View style={styles.innerContainer}>
        <Text style={styles.Title}>{news.title}</Text>

     <View style={styles.ContextContainer}>
      <View style={styles.infosong}>
        <Text>{news.artist}</Text>
        <Text style={styles.years}>{news.year}</Text>
        
        </View>
        { news.isSoldOut && (<View style={styles.soldContainer}>
          <Text style={styles.sold}>Tükendi</Text>
          </View>)}
      </View>
      </View>
    </View>




   
    
  )
}

export default Card

