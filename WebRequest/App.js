
import { Button, StyleSheet, Text, View, FlatList,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from './Component/UserCard/UserCard';

export default function App() {
  const [list, setlist] = useState([]);
  const [loading , setloading]=useState(false);

 async function FetchData(){
  setloading(true);
 const response=await axios.get('https://jsonplaceholder.typicode.com/users');
  setloading(false);
 setlist(response.data)
   
   

  }
 
  const RenderItem=({item})=>(<UserCard username={item.username} email={item.email} name={item.name}/>);

  useEffect(()=>{
    FetchData();


  },[])

  return (
    <View style={styles.container}>

      {
        loading ? (<ActivityIndicator size='large'/>) :
        
        (<FlatList 
      data={list}
      renderItem={RenderItem}
      
      />)}
      
      {/* <Button title='Fetch data' onPress={FetchData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    backgroundColor: '#fff',


  },
});
