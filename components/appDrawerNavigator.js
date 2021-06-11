import React, { Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomSideBarMenu from './customSideBarMenu';
import SettingsScreen from '../screens/settingsScreen';
export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : AppTabNavigator
      },
      Settings:{
        screen:SettingsScreen
      },
  },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })