import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Animated
} from "react-native";
import { CardSection } from "./Common";
import { connect } from "react-redux";
import * as actions from "../Actions";

class Item extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    const data = this.props.library.item;
    const { title, id } = data;
    const { Titles } = styles;
    const { expanded } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={Titles}>{data.title}</Text>
          </CardSection>
          <CardSection>
            {expanded ? (
              <Text style={{ flex: 1 }}>{data.description}</Text>
            ) : null}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const expanded = state.ActiveLibrary === ownProps.library.item.id;
  return { expanded };
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
