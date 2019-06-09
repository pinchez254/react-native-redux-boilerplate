import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import AppNavigator from "../src/Components/Home";
import AuthRoutes from '../src/Components/Authentication'
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AuthRoutes />
      </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
