import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import Header from './Component/Header';
import Footer from './Component/Footer/';
import Card from './Component/Card';






export default function App() {
  const [counter,setcounter]=useState(0);
  const [listem,setlistem]=useState([]);
  const [svalue,setValue]=useState('');
  
  const addtask = () => {
    if (svalue.trim()) {  // Eğer input boş değilse (sadece boşluk değilse)
        setlistem([...listem, svalue]); // Listeye yeni görev ekler
        setcounter(counter + 1);  // Görev sayısını bir artırır
        setValue('');   // TextInput'u temizler
    }
            };
    const Items = ({ item }) => (
 
       <Card task={item} />  
  
    );
  
  

  


  
  return (
    
  <SafeAreaView style={styles.container}>
  
      <Header setCount={counter}/>
      
  
      <FlatList data={listem} renderItem={Items} keyExtractor={(item, index) => index.toString()} />
      

     
   
    <Footer setUpdate={addtask}  text={svalue}  settext={setValue} />  
    </SafeAreaView>
 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
   marginTop:40,
   padding:5,
  },
});
