import { createBottomTabNavigator } from "react-navigation";
import {Icon} from 'native-base'
import NotificationsTab from "../Notifications";
import SearchTab from "../Search";
import HomeScreen from "./Home";

const TabNavigator = createBottomTabNavigator({
  Notifications: NotificationsTab,
  Home: HomeScreen,

  Search: SearchTab,
 
});
export default TabNavigator;
