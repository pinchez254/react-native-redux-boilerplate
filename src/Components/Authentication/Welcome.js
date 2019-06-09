import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Button } from "native-base";
import { Header } from "../../Components/Common";
import Icon from "react-native-vector-icons/FontAwesome";
const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);
const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: "Arial", fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);
class WelcomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header headerText="welcome screen" />
        <Content style={StyleSheet.Content}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1 }}>
            <Button
              full
              light
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>login</Text>
            </Button>
            <Button full>
              <Text>signUp</Text>
            </Button>
          </View>
          {myButton}
          {customTextButton}
        </Content>
      </Container>
    );
  }
}
export default WelcomeScreen;
