import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardSection } from "./Common";

class Item extends Component {
  render() {
    const data = this.props.library.item;
    return (
      <CardSection>
        <Text>{data.title}</Text>
      </CardSection>
    );
  }
}
export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
