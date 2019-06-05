import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import Item from "./Item";
import { throwStatement } from "@babel/types";

class LibrariesList extends Component {
  renderItem(library) {
    return <Item library={library} />;
  }
  _keyExtractor = (item, index) => item.id + item.title;

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};
export default connect(mapStateToProps)(LibrariesList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
