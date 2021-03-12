import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import FirstScreen from './screens/Auth/FirstScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import CreateTeam from './screens/Auth/CreateTeam';
import JoinTeam from './screens/Auth/JoinTeam';
import ForgetPassword from './screens/Auth/ForgetPassword';
import SettingScreen from './screens/Settings/SettingScreen';
import EditProfile from './screens/Settings/EditProfile';
import TeamsScreen from './screens/TeamsScreen';
import MyAccount from './screens/Settings/MyAccount';
import { MaterialIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




export default function App() {
  const globalScreenOptions = {
    headerStyle: { backgroundColor: '#2577c4' },
    headerTitlestyle: { color: "white" },
    headerTintColor: "white"
  };
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();
  const HStack = createStackNavigator();
  const TStack= createStackNavigator();
  const AStack= createStackNavigator();

const HomeStack=()=>{
  return (
    <HStack.Navigator screenOptions={globalScreenOptions}>
        <HStack.Screen
          name='Projects' component={HomeScreen} />
      </HStack.Navigator>
  )
}
const TeamStack=()=>{
  return (
    <TStack.Navigator screenOptions={globalScreenOptions}>
        <TStack.Screen
          name='Issues' component={TeamsScreen} />
      </TStack.Navigator>
  )
}
const AccountStack=()=>{
  return (
    <AStack.Navigator screenOptions={globalScreenOptions}>
        <AStack.Screen
          name='Account' component={MyAccount} />
           <AStack.Screen
          name='EditProfile' component={EditProfile} />
      </AStack.Navigator>
  )
}

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Projects"
        activeColor="white"
        inactiveColor="#211f1f"
        barStyle={{ backgroundColor: '#2577c4' }}
        tabBarOptions={{ showLabel: false }}
      >
        <Tab.Screen
          name="Projects"
          component={HomeStack}
          options={{
          
            tabBarIcon: ({focused}) => (
              <MaterialIcons name="folder-shared"  color={focused? "white" :"#211f1f"} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Issues"
          component={TeamStack}
          options={{
          
            tabBarIcon: ({focused})=> (
              <MaterialIcons name="stacked-line-chart" color={focused? "white" :"#211f1f"} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
           
            tabBarIcon: ({focused}) => (
              <MaterialIcons name="account-circle" color={focused? "white" :"#211f1f"} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

    );
  };
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name='First' component={FirstScreen} />
        <Stack.Screen
          name='Signin' component={SignUpScreen} />
        <Stack.Screen
          name='Login' component={LoginScreen} />
         <Stack.Screen
          name='ForgetPassword' component={ForgetPassword} />
          <Stack.Screen
          name='CreateTeam' component={CreateTeam} />
          <Stack.Screen
          name='JoinTeam' component={JoinTeam} />
        <Stack.Screen
          name='Projects' component={HomeScreen} />
        <Stack.Screen
          name='Home' component={BottomTabNavigator} options={{headerShown: false}}/>
        <Stack.Screen
          name='Settings' component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
