import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import { Header } from "./Components/Common";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Redux-Boilerplate" />
          <Text>meeApp</Text>
        </View>
      </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({});
