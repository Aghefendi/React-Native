import { View, Text, ActivityIndicator,useWindowDimensions,ScrollView } from 'react-native'
import React from 'react'
import styles from './DetailCs'
import useFect from '../../hook/useFect'
import RenderHTML from 'react-native-render-html'
import DetailHeader from '../../component/DetailHeader'
import DetailFooter from '../../component/DetailFooter'

const apiurl='https://www.themuse.com/api/public/jobs/'

export default function Detail({route,navigation}) {
    
    const {id}=route.params
    const width = useWindowDimensions().width
    const {data,error,loading}=useFect(apiurl+id)


    if (loading) {
        return <ActivityIndicator size='large'/>
    }

    if (error) {
        return <Text>{error}</Text>
    }

    const source = {
        html: data.contents,
    }

  return (
    <View style={styles.container}>
            <ScrollView >
                <DetailHeader data={data} navigation={navigation} />
                <View style={styles.renderHtml}>
                    <RenderHTML source={source} contentWidth={width} />
                </View>
            </ScrollView>
            <View style={styles.footer}>

                <DetailFooter data={data} navigation={navigation} />
            </View>
        </View>
  )
}