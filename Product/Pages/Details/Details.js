import { Text, View,Image } from 'react-native';
import React from 'react';
import styles from './DetailsCs';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import useFetch from '../../hooks/useFetch/useFetch';

const Details = ({route}) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const {loading,error,data}=useFetch(apiUrl+'/'+route.params.id);

  if(loading){return <Loading />;}
  if(error){return <Error />;}

 
  return (
    <View style={styles.container}>
      <Image source={{uri:data.image}} style={styles.Imagecs}/>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price}</Text>
    </View>
  );
};

export default Details;
