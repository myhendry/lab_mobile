import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FormInput, FormLabel, Button } from "react-native-elements";

import { onSignIn } from "../auth";

class SignupScreen extends Component {
  static navigationOptions = {
    title: "SIGN UP"
  };

  state = {};
  render() {
    return (
      <View>
        <FormLabel>EMAIL</FormLabel>
        <FormInput />
        <FormLabel>PASSWORD</FormLabel>
        <FormInput />
        <View style={styles.btnContainer}>
          <Button
            title="SIGN UP"
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="GO TO SIGN IN"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("Signin")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: 15
  }
});

export default SignupScreen;
