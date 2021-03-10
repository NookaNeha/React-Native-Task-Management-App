import React from 'react';
import {
  createAppContainer,createSwitchNavigator
} from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation-drawer';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FirstScreen from "./screens/FirstScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from "./screens/SignUpScreen"


const AuthNavigator = createStackNavigator(
  {
    First: FirstScreen,
    Signin:SignUpScreen,
    Login: LoginScreen,
    Home: HomeNavigator
  },
);

const HomeNavigator = createStackNavigator(
  {
    HomeNav: HomeScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color="white"
        />
      )
    },
  }
);



const DrawerNav = createDrawerNavigator(
  {
    Home: HomeNavigator
  },
  {
    contentOptions: {
      activeTintColor: "white"
    },

  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Home: HomeNavigator
});

export default createAppContainer(MainNavigator);
