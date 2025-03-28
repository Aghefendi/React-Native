import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store'; // The store we created earlier
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser, setAuthLoading } from './userSlice'; // Actions for setting user data

const AuthProvider = ({ children }) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then((userSession) => {
      if (userSession) {
        const user = JSON.parse(userSession);
        store.dispatch(setUser(user)); // Dispatch user data to the store
      }
      setIsAuthLoading(false); // Stop loading once we check AsyncStorage
    });
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
