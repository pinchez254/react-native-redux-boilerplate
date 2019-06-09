import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Button } from "native-base";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Content style={StyleSheet.Content}>
          <View style={{ flex: 1 , height:200}} />
          <View style={{ flex: 1 }}>
            <Button
              full
              light
              onPress={() => this.props.navigation.navigate("Drawer")}
            >
              <Text>Home</Text>
            </Button>
           
          </View>
        </Content>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});
