import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Create a slice for counter state
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Extract the actions and reducer
const { actions, reducer } = counterSlice;

// Configure the store
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <First />
        <Second />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// First component
const First = () => {
  const counter = useSelector((state) => state.counter.counter); // Access the counter
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(actions.increment()); // Dispatch increment action
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{counter}</Text>
      <Button title="Increment" onPress={handleIncrement} />
    </View>
  );
};

// Second component
const Second = () => {
  const counter = useSelector((state) => state.counter.counter); // Access the counter

  return (
    <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{counter}</Text>
    </View>
  );
};
