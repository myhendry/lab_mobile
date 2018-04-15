import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";

import ShowContext from "../components/ShowContext";
import { ResetToSignedOut } from "../navigations";
import { onSignOut } from "../auth";

class ContextScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ShowContext />
        <View style={styles.btnContainer}>
          <Button
            title="SIGN OUT"
            // ERROR: There is no route defined for key SignOut. Must be one of: ...
            // onPress={() =>
            //   onSignOut().then(() =>
            //     this.props.navigation.navigate("SignedOut")
            //   )
            // }
            // onPress={() =>
            //   this.props.navigation.dispatch(
            //     NavigationActions.reset({
            //       index: 0,
            //       key: null,
            //       actions: [
            //         NavigationActions.navigate({ routeName: "SignedOut" })
            //       ]
            //     })
            //   )
            // }
            onPress={() => {
              onSignOut().then(() =>
                this.props.navigation.dispatch(ResetToSignedOut)
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    padding: 15
  }
});

export default ContextScreen;
