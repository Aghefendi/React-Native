import { Text, View, FlatList,ActivityIndicator } from 'react-native';
import React, { useEffect,useState } from 'react';
import styles from './ProductCs';
import ProductCard from '../../Component/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Product = () => {

const {loading,error,data}=useFetch(apiUrl);



const renderProduct =({item})=><ProductCard product={item}/> ;

if(loading){return <Loading />;}
if(error){return <Error />;}

 return (
    <View style={styles.container}>
      <FlatList 
      
      
      data={data} 
      
      
      renderItem={renderProduct} 
      
      
      />
    </View>
  );
};

export default Product;

