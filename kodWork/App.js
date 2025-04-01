import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/navigation/Root'
import { Provider } from 'react-redux';
import { Store } from './src/context/Store'

export default function App() {
  return(
    <Provider store={Store}>
  <Root/>
  </Provider> )
}

