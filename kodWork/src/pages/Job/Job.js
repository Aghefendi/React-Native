import { View, Text,FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './JobCs'
import useFect from '../../hook/useFect'
import JobCard from '../../component/JobCard'


const apiurl='https://www.themuse.com/api/public/jobs?page=1'

const Job = ({navigation}) => {
    const {data,loading,error} =useFect(apiurl)

    


    if(loading){<ActivityIndicator size='large' />}
    if(error){<Text>{error}</Text>}

    const Handleonpress=(item)=>{
      navigation.navigate('Detail',{ id: item.id })

    }

   const RenderJobs=({item})=>{return <JobCard item={item} Handleonpress={() => Handleonpress(item)}/>}


  return (
    <View style={styles.container}>
    <FlatList
        data={data.results}
        renderItem={RenderJobs}
    
    
    />
    </View>

  )
}

export default Job