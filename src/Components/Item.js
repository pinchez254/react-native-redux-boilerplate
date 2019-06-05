import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardSection } from "./Common";

class Item extends Component {
  render() {
    const data = this.props.library.item;
    const { Titles } = styles;
    return (
      <CardSection>
        <Text style={Titles}>{data.title}</Text>
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
  },
  Titles: {
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: "bold"
  }
});
