import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import FirstScreen from './screens/FirstScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SettingScreen from './screens/SettingScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
       name='First' component={FirstScreen} />
        <Stack.Screen
       name='Signin' component={SignUpScreen} />
       <Stack.Screen
       name='Login' component={LoginScreen} />
        <Stack.Screen
       name='Home' component={HomeScreen} />
        {/* <Stack.Screen
       name='Settings' component={SettingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


