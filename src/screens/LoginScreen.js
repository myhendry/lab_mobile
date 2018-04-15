import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";

import { onSignIn } from "../auth";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <View style={styles.btnContainer}>
          <Button
            title="SIGN IN"
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
            // onPress={() => {
            //   onSignIn().then(() =>
            //     this.props.navigation.dispatch(ResetToSignedIn)
            //   );
            // }}
            // onPress={() => {
            //   onSignIn().then(() => {
            //     this.props.navigation.dispatch(
            //       NavigationActions.reset({
            //         index: 0,
            //         key: null,
            //         actions: [NavigationActions.navigate({ routeName: "Home" })]
            //       })
            //     );
            //   });
            // }}
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

export default LoginScreen;
