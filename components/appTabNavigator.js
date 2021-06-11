import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/exchangeScreen'
import HomeScreen from '../screens/homeScreen'
export const AppTabNavigator= createBottomTabNavigator({
Home:{
    screen: HomeScreen
},
Exchange:{
    screen: ExchangeScreen
}
})