import React, { useEffect } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import { setUser } from '../../Context/Redux/userSlice'; // Import the setUser action
import usePost from '../../hooks/usePost/usePost'; // Custom hook for API calls
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginCs';

const apiUrlm = process.env.EXPO_PUBLIC_API_AUTH;

const Login = ({ navigation }) => {
  const { data, loading, error, post } = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && !loading) {
      if (data.status === 'Error') {
        Alert.alert('Kullanıcı bulunamadı');
      } else {
        // Assuming data contains the user object
        const user = data.user;

        // Dispatch the user to Redux store
        dispatch(setUser(user));

        // Save the user in AsyncStorage to persist the session
        AsyncStorage.setItem('@USER', JSON.stringify(user));

        // Navigate to the product page after successful login
        navigation.navigate('ProductPage');
      }
    }

    if (error) {
      Alert.alert('Bir hata oluştu');
    }
  }, [data, loading, error, dispatch, navigation]);

  const handleLogin = (values) => {
    post(apiUrlm + '/login', values);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/agah.png')} style={styles.logo} />

      <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
        {({ handleChange, values, handleSubmit }) => (
          <View style={{ marginTop: 20, flex: 1 }}>
            <Input
              placeholder="Username..."
              value={values.username}
              onType={handleChange('username')}
              iconName="person"
              isSecure={false}
            />

            <Input
              placeholder="Password.."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure={true}
            />

            <Button text="Giriş yap..." onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
