import React from "react";
import { View, Text, AsyncStorage, Button, StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: "HOME"
  // };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate("Context");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
