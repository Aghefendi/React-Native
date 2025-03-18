import { Text, View, FlatList } from 'react-native';
import React, { useEffect,useState } from 'react';
import styles from './ProductCs';
import ProductCard from '../../Component/ProductCard';
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Product = () => {

const [data, setdata] = useState([]);
useEffect(()=>{fetctData();},[]);

const fetctData= async()=>{
 const {data:productData}= await axios.get(apiUrl);
 setdata(productData);


}

const renderProduct =({item})=><ProductCard product={item}/> ;
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

