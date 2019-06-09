import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SwitchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SwitchScreen</Text>
            </View>
        );
    }
}
export default SwitchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});