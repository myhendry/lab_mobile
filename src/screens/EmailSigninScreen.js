import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  SocialIcon
} from "react-native-elements";
import { compose, graphql } from "react-apollo";

import { LOG_IN } from "../graphql/mutations";

class EmailSigninScreen extends Component {
  static navigationOptions = {
    title: "SIGN IN WITH EMAIL"
  };

  state = {
    email: "",
    password: ""
  };

  _login = async () => {
    const { email, password } = this.state;

    try {
      const { data } = await this.props.login({
        variables: {
          email,
          password
        }
      });
      await AsyncStorage.setItem("@token", data.login.token);
      this.props.navigation.navigate("App");
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>EMAIL</FormLabel>
        <FormInput
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <FormLabel>PASSWORD</FormLabel>
        <FormInput
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
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
            onPress={this._login}
          />
        </View>
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

export default compose(graphql(LOG_IN, { name: "login" }))(EmailSigninScreen);
