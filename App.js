import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {AppTabNavigator} from './components/appTabNavigator'
import {AppDrawerNavigator} from './components/appDrawerNavigator'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './screens/welcomeScreen';

export default function App() {
  return (
      <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const SwitchNavigator=createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Drawer: {screen:AppDrawerNavigator}
})
const AppContainer= createAppContainer(SwitchNavigator)