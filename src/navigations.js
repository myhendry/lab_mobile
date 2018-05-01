import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  SwitchNavigator,
  NavigationActions
} from "react-navigation";
import { FontAwesome, Foundation, Ionicons, Entypo } from "@expo/vector-icons";

import { colors } from "../src/config/constants";
import { onSignOut } from "./auth";
import CrudScreen from "./screens/CrudScreen";
import StateScreen from "./screens/StateScreen";
import MoreScreen from "./screens/MoreScreen";
import ContextScreen from "./screens/ContextScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import EmailSigninScreen from "./screens/EmailSigninScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SideMenu from "./components/SideMenu";

const TAB_ICON_SIZE = 20;

const CrudStack = StackNavigator({
  Crud: {
    screen: CrudScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "APOLLO CRUD",
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.SECONDARY
      },
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate("DrawerOpen")}>
          <Foundation
            name="list"
            size={TAB_ICON_SIZE}
            style={styles.iconStyle}
          />
        </TouchableHighlight>
      )
    })
  },
  More: {
    screen: MoreScreen,
    navigationOptions: () => ({
      headerTitle: "MORE",
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

const StateStack = StackNavigator({
  State: {
    screen: StateScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "APOLLO STATE",
      headerStyle: {
        backgroundColor: colors.PRIMARY
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.SECONDARY
      },
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate("DrawerOpen")}>
          <Foundation
            name="list"
            size={TAB_ICON_SIZE}
            style={styles.iconStyle}
          />
        </TouchableHighlight>
      )
    })
  }
});

const ContextStack = StackNavigator({
  Context: {
    screen: ContextScreen,

    navigationOptions: ({ navigation }) => ({
      headerTitle: "CONTEXT API",
      headerStyle: {
        backgroundColor: colors.WHITE
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.PRIMARY
      },
      headerRight: (
        <View style={{ paddingRight: 15 }}>
          <TouchableOpacity
            onPress={() =>
              onSignOut().then(() => navigation.navigate("SignedOut"))
            }
          >
            <Ionicons size={TAB_ICON_SIZE} name="md-exit" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate("DrawerOpen")}>
          <Foundation
            name="list"
            size={TAB_ICON_SIZE}
            style={styles.iconStyle}
          />
        </TouchableHighlight>
      )
    })
  }
});

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "HOME",
      headerStyle: {
        backgroundColor: colors.WHITE
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: colors.PRIMARY
      },
      headerRight: (
        <View style={{ paddingRight: 15 }}>
          <TouchableOpacity
            onPress={() =>
              onSignOut().then(() => navigation.navigate("SignedOut"))
            }
          >
            <Ionicons size={TAB_ICON_SIZE} name="md-exit" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate("DrawerOpen")}>
          <Foundation
            name="list"
            size={TAB_ICON_SIZE}
            style={styles.iconStyle}
          />
        </TouchableHighlight>
      )
    })
  }
});

const styles = StyleSheet.create({
  iconStyle: {
    padding: 10
  }
});

// USING TABNAVIGATOR
// const AppStack = TabNavigator(
//   {
//     Crud: {
//       screen: CrudStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Entypo size={TAB_ICON_SIZE} color={tintColor} name="air" />
//         )
//       })
//     },
//     State: {
//       screen: StateStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
//         )
//       })
//     },
//     Context: {
//       screen: ContextStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <Entypo size={TAB_ICON_SIZE} color={tintColor} name="archive" />
//         )
//       })
//     },
//     Home: {
//       screen: HomeStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
//         )
//       })
//     }
//   },
//   {
//     lazy: true,
//     tabBarPosition: "bottom",
//     swipeEnabled: false,
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: true,
//       activeTintColor: colors.PRIMARY,
//       inactiveTintColor: colors.LIGHT_GRAY
//     },
//     style: {
//       backgroundColor: colors.WHITE,
//       height: 50,
//       paddingVertical: 5,
//       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//     }
//   }
// );

// USING DRAWERNAVIGATOR
const AppStack = DrawerNavigator(
  {
    Crud: {
      screen: CrudStack
    },
    State: {
      screen: StateStack
    },
    Context: {
      screen: ContextStack
    },
    Home: {
      screen: HomeStack
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 250
  }
);

const AuthStack = StackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen,
  EmailSignin: EmailSigninScreen
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

// const Tabs = TabNavigator(
//   {
//     Crud: {
//       screen: HomeStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
//         )
//       })
//     },
//     State: {
//       screen: StateStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
//         )
//       })
//     },
//     Context: {
//       screen: ContextStack,
//       navigationOptions: () => ({
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
//         )
//       })
//     }
//   },
//   {
//     lazy: true,
//     tabBarPosition: "bottom",
//     swipeEnabled: false,
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: true,
//       activeTintColor: colors.PRIMARY,
//       inactiveTintColor: colors.LIGHT_GRAY,
//       style: {
//         backgroundColor: colors.WHITE,
//         height: 50,
//         paddingVertical: 5,
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//       }
//     }
//   }
// );

// const AuthStack2 = StackNavigator({
//   Signup: {
//     screen: SignupScreen,
//     navigationOptions: () => ({
//       headerTitle: "SIGN UP",
//       headerStyle: {
//         backgroundColor: colors.PRIMARY
//       },
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: colors.SECONDARY
//       }
//     })
//   },
//   Signin: {
//     screen: SigninScreen,
//     navigationOptions: () => ({
//       headerTitle: "SIGN IN",
//       headerStyle: {
//         backgroundColor: colors.PRIMARY
//       },
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: colors.SECONDARY
//       }
//     })
//   }
// });

// export const ResetToSignedOut = NavigationActions.reset({
//   index: 0,
//   key: null,
//   actions: [NavigationActions.navigate({ routeName: "SignedOut" })]
// });

// export const ResetToSignedIn = NavigationActions.reset({
//   index: 0,
//   key: null,
//   actions: [NavigationActions.navigate({ routeName: "SignedIn" })]
// });

// export const createRootNavigator = (signedIn = false) => {
//   return SwitchNavigator(
//     {
//       SignedIn: {
//         screen: Tabs
//       },
//       SignedOut: {
//         screen: AuthStack
//       }
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//     }
//   );
// };
