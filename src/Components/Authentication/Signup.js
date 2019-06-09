import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignupScreen</Text>
            </View>
        );
    }
}
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});