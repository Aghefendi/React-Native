import styles from './LoginCs';
import { Text, View, Image, Alert, VirtualizedList } from 'react-native';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost/usePost';



const apiUrlm = process.env.EXPO_PUBLIC_API_AUTH;

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    
    function handleLogin(values) {
        post(apiUrlm + '/login', values);
        
    }

    // Handle error state and display alert
    if (error) {
        Alert.alert("Bir hata oluştu");
    }
    
    if(data&&!loading){
            if(data.status==='Error'){
                
                Alert.alert("Kullanıcı bulunamadı")
            }
            else{
                

                navigation.navigate('ProductPAge')
            }



    }

    // Check if we should navigate after data has been received
    

    
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