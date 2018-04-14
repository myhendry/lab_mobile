import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";

import { colors } from "../src/config/constants";
import Main from "./screens/Main";
import About from "./screens/About";
import Details from "./screens/Details";

const TAB_ICON_SIZE = 20;

const HomeStack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: () => ({
      headerTitle: "MAIN",
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.SECONDARY
      }
    })
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      headerTitle: "DETAILS",
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.SECONDARY
      }
    })
  }
});

export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
        )
      })
    },
    About: {
      screen: About,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
        )
      })
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GRAY,
      style: {
        backgroundColor: colors.WHITE,
        height: 50,
        paddingVertical: 5
      }
    }
  }
);
