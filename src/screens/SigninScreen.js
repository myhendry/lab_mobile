import React from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class SigninScreen extends React.Component {
  static navigationOptions = {
    title: "SIGN IN"
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>EMAIL</FormLabel>
        <FormInput />
        <FormLabel>PASSWORD</FormLabel>
        <FormInput />
        <View style={styles.btnContainer}>
          <Button
            title="SIGN IN"
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this._signInAsync}
          />
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnContainer: {
    padding: 15
  }
});

export default SigninScreen;
