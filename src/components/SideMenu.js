import React, { Component } from "react";
import { View, AsyncStorage, Text, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";

import { colors } from "../config/constants";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={styles.menuItem} onPress={this.navigateToScreen("Crud")}>
            Crud
          </Text>
          <Text
            style={styles.menuItem}
            onPress={this.navigateToScreen("State")}
          >
            State
          </Text>
          <Text
            style={styles.menuItem}
            onPress={this.navigateToScreen("Context")}
          >
            Context
          </Text>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.menuItem} onPress={this.navigateToScreen("Home")}>
            Home
          </Text>
          <Text style={styles.menuItem} onPress={this._signOutAsync}>
            Log Out
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY
  },
  upperContainer: {
    flex: 4,
    paddingTop: 60,
    paddingBottom: 10
  },
  lowerContainer: {
    flex: 3,
    backgroundColor: colors.WHITE
  },
  menuItem: {
    fontSize: 20,
    padding: 15
  }
});

export default SideMenu;
