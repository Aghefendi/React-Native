import { StyleSheet, Text, View,SafeAreaView,FlatList} from 'react-native'
import {React,useState} from 'react'


import Header from '../component/Header/Header'; 
import Footer from '../component/Footer';
import Card from '../component/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './../context/useSlace';

const Root = () => {

  const [svalue, setValue] = useState('');
  const tasks = useSelector(state => state.tasks.tasks);  // Redux store'dan görevleri al
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (svalue.trim()) {
      const newTask = { id: Date.now(), text: svalue };
      dispatch(addTodo(newTask));  // Redux'a yeni görev ekle
      setValue('');
    }
  };
  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));  // Redux'tan görev sil
  };

    const Items = ({ item }) => (
 
        <Card task={item} removeTask={handleRemoveTask} />  
   
     );
  return (
    <SafeAreaView style={styles.container}>
      <Header setCount={tasks.length} />
      <FlatList
        data={tasks}
        renderItem={Items}
        keyExtractor={(item) => item.id.toString()}
      />
      <Footer setUpdate={handleAddTask} text={svalue} settext={setValue} />
    </SafeAreaView>
  
)
}

export default Root

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#121212',
       marginTop:40,
       padding:5,
      },
})