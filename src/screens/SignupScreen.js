import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { FormInput, FormLabel, Button } from "react-native-elements";
import { graphql, compose } from "react-apollo";

import { SIGN_UP } from "../graphql/mutations";
import { onSignIn } from "../auth";

class SignupScreen extends Component {
  static navigationOptions = {
    title: "SIGN UP"
  };

  _signup = async () => {
    const { email, password, fullName, username } = this.state;
    try {
      const { data } = await this.props.signup({
        variables: {
          email,
          password,
          fullName,
          username
        }
      });
      await AsyncStorage.setItem("@token", data.signup.token);
      this.props.navigation.navigate("App");
    } catch (error) {
      throw error;
    }
  };

  state = {
    email: "",
    password: "",
    fullName: "",
    username: ""
  };

  render() {
    return (
      <View>
        <FormLabel>FULL NAME</FormLabel>
        <FormInput
          onChangeText={fullName => this.setState({ fullName })}
          value={this.state.fullName}
        />
        <FormLabel>USERNAME</FormLabel>
        <FormInput
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
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
            title="SIGN UP"
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this._signup}
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

export default compose(graphql(SIGN_UP, { name: "signup" }))(SignupScreen);
