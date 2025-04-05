import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Job from "../Pages/Job";
import Detail from "../Pages/Detail";




const   Stacker=()=> {
  const MyStack = createStackNavigator();
    
  return (
  
        <MyStack.Navigator screenOptions={{headerShown: false}}>
          <MyStack.Screen name="Job" component={Job}/>
          <MyStack.Screen name="Detail" component={Detail}/>

          </MyStack.Navigator>
      
  )
}

export default Stacker;