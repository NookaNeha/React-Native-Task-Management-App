import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import React from 'react';


import MainNavigator from "./components/Navigator"

export default function App() {
  return (
    <MainNavigator />
  );
}


