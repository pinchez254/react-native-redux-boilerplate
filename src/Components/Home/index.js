import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import TabNavigator from './Tabs';
import { Icon } from 'native-base';

const TabStackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  }
);
const Drawer = createDrawerNavigator({
  Home: TabStackNavigator,
},
{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  }
);

export default Drawer;
