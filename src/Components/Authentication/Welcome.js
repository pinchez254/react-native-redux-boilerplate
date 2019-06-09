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
        </Content>
      </Container>
    );
  }
}
export default WelcomeScreen;
