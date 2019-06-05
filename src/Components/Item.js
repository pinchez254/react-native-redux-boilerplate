import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./Common";
import { connect } from "react-redux";
import * as actions from "../Actions";

class Item extends Component {
  _description() {
    const data = this.props.library;
  }
  render() {
    const data = this.props.library.item;
    const { title, id } = data;
    const { Titles } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={Titles}>{data.title}</Text>
          </CardSection>
          {data.id === this.props.selectedLibraryId ? (
            <Text>{data.description}</Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    selectedLibraryId: state.ActiveLibrary
  };
};
export default connect(
  mapStateToProps,
  actions
)(Item);

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
