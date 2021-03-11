// import * as React from 'react';

// import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import FirstScreen from '../screens/FirstScreen';
// import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import SettingScreen from '../screens/SettingScreen';
// const Stack = createStackNavigator();
// const AuthFlowStack = createStackNavigator();
// const Drawer = createDrawerNavigator();


// // Took it for general all pages
// const MyStack = () => {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator 
//             initialRouteName='Home'
//             headerMode='float'
//             mode='modal'
//           >
//             <Stack.Screen options={{
//                             headerShown: false
//                           }}
//                           name='Home' 
//                           component={HomeScreen} />
//             <Stack.Screen name="SettingScreen" component={SettingScreen} options={{headerShown:false}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
// }

// // Inside Drawer I want to show these pages
// function MyDrawer() {
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyStack} options={{headerShown:false}} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} options={{headerShown:false}} />
        {/* <Drawer.Screen name="Help" component={Help} options={{headerShown:false}} /> */}
      </Drawer.Navigator>
// }

// // Auth module where Login/Registration/Forgetpassword Like screen without authentication user will open
// function AuthFlow() {
//   <NavigationContainer>
//     <AuthFlowStack.Screen
//        name='First' component={FirstScreen} />
//         <AuthFlowStack.Screen
//        name='Signin' component={SignUpScreen} />
//        <AuthFlowStack.Screen
//        name='Login' component={LoginScreen} />
//   </NavigationContainer>
// }

// <NavigationContainer>
//         {
//             isLoggedIn ? <MyDrawer /> : <AuthFlow />
//         }
//     </NavigationContainer>
// export default {AppStack};


