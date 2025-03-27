import styles from './LoginCs';
import { Text, View, Image, Alert, VirtualizedList } from 'react-native';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import { Formik } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';



const Login = () => {

    function handleLogin(values){
       console.log(values);
    }
  
    
    return (
        
        <View style={styles.container}>
            <Image source={require('../../assets/agah.png')} style={styles.logo} />
         
      <Formik
      initialValues={{username: '' , password: ''}} onSubmit={handleLogin}>
        
        {({handleChange,values,handleSubmit})=>(
        <View style={{marginTop:20,flex:1}}>
       
        <Input placeholder="Username..."  value={values.username} onType={handleChange('username')} iconName={"person"} isSecure={false}/>
       
         <Input placeholder="Password.."  value={values.password} onType={handleChange('password')} iconName={"key"} isSecure={true}/>
         <Button text={"Giriş yap..."} onPress={handleSubmit}/>
        </View>
         )}</Formik>
         
        </View>
        
    );
    }

    export default Login;