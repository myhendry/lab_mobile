import React from "react";
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  SocialIcon
} from "react-native-elements";

import { onSignIn } from "../auth";
class SigninScreen extends React.Component {
  static navigationOptions = {
    title: "SIGN IN"
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <SocialIcon
            title="Sign In With Email"
            button
            type="foursquare"
            onPress={() => {
              this.props.navigation.navigate("EmailSignin");
            }}
          />
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={this._signInAsync}
          />
          <SocialIcon
            title="Sign In With Google Plus"
            button
            type="google-plus-official"
          />
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text>Sign Up Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  btnContainer: {
    padding: 15
  },
  linkContainer: {
    padding: 15,
    alignItems: "center"
  }
});

export default SigninScreen;
