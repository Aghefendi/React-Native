import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Root from './Root/Root'
import store from './context/store'
import { Provider } from 'react-redux'

export default function App() {
  return (

    <Provider store={store}>

      <Root/>
    </Provider>


  )
}

