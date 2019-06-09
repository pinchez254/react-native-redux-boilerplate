import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Button } from "native-base";
import { Header } from "../../Components/Common";

class WelcomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header headerText="welcome screen" />

        <Content style={StyleSheet.Content}>
          <Button full light>
            <Text>login</Text>
          </Button>
          <Button full>
            <Text>signUp</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default WelcomeScreen;
