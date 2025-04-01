import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../component/JobCard'
import styles from './FavoriteCs'


const Favorite = ({ navigation }) => {

    const favorites = useSelector((state) => state.favorites)


    const renderItem = ({ item }) => (
        <View>
            <Card
                item={item}
                navigation={navigation}
                customButton={"Remove from Favorites"}
            />
        </View>
    )


    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                estimatedItemSize={200}
            />
        </View>
    )
}

export default Favorite