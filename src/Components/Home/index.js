import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import React, { Component } from "react";
import TabNavigator from "./Tabs";
import Icon from "react-native-vector-icons/Ionicons";

const TabStackNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Redux boiler",
          headerLeft: (
            <Icon
              name="md-menu"
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
