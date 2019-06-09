import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../Common";
import LibrariesList from "../LibariesList";
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Redux-with react-native" />
        <LibrariesList />
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
