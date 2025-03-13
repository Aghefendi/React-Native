import { StyleSheet, View,FlatList, SafeAreaView} from 'react-native';
import React,{use, useState} from 'react';
import music from './music-data.json';
import Card from './component/Card';
import Searchbar from './component/Searchbar';







export default function App() {

  const [list,setList] =useState(music)
 
  const RenderSong=({item})=> <Card news={item}/>;
  const RenderSepareter = () =><View style={styles.separet}/>;
  const handleonSearch=(text)=>{
    const filterList=music.filter(song=>{
      const searchText=text.toLowerCase();
      const currentText=song.title.toLowerCase();
      const currentText1=song.artist.toLowerCase();
      return(
        
        currentText.includes(searchText) || currentText1.includes(searchText)
      
      );


    });

    setList(filterList);



  };



  return (

    
    <SafeAreaView style={styles.container}>
      
    <Searchbar onSearch={handleonSearch}  />
     
      <FlatList
      keyExtractor={item=>item.id}
      data={list}
      renderItem={RenderSong}
      ItemSeparatorComponent={RenderSepareter}
      />
      
    
   
   
    </SafeAreaView>
  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  
  },
  separet:{
    borderWidth:1,
    borderColor:'gray',
    
    
  }
});
