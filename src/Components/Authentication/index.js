import { createStackNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from "./Welcome";
import LoginScreen from "./Login";
import SignUpScreen from "./Signup";
import Drawer from "../Home";

const AuthRoutes = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerTitle: "SignUp"
      }
    },

    /* Walkthrough: {
      screen: Walkthrough,
      navigationOptions: {
        headerTitle: 'SignUp',
        header: '',
      },
    },
    */
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Welcome",
    navigationOptions: {
      animationEnabled: true
    }
  }
);
export default createAppContainer(AuthRoutes);
