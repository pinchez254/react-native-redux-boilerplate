import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import React, { Component } from "react";
import TabNavigator from "./Tabs";
import { Icon } from "native-base";

const TabStackNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Redux boiler",
          headerLeft: (
            <Icon
              name="home"
              style={{ paddingLeft: 10 }}
              size={32}
              color="blue"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          )
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {};
    }
  }
);
const Drawer = createDrawerNavigator(
  {
    Home: TabStackNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }
);

export default Drawer;
