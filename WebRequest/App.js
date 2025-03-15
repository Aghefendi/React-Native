import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {


 async function FetchData(){
 const response=await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(response);
   
   

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Fetch data' onPress={FetchData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
