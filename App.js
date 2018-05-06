import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import MyProvider from "./src/MyProvider";
import Nav from "./src/navigations";
import { CURRENT_GAME } from "./src/graphql/queries";

// console.disableYellowBox = true;
console.disableYellowBox = [
  "Encountered an error loading page", // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  "Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  "Task orphaned for request ",
  "Remote debugger is in a background tab which may cause apps to perform slowly"
];

const defaultState = {
  currentGame: {
    __typename: "currentGame",
    teamAScore: 0,
    teamBScore: 0,
    teamAName: "Team A",
    teamBName: "Team B"
  },
  me: {
    __typename: "me",
    _id: "",
    email: "",
    firstName: "",
    lastName: ""
  }
};

const client = new ApolloClient({
  // uri: "https://gqltoy.herokuapp.com/graphql",
  // uri: "http://127.0.0.1:5000/graphql",
  uri: "http://localhost:5000/graphql",
  request: async operation => {
    const token = await AsyncStorage.getItem("@token");
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  // clientState: {
  //   defaults: defaultState,
  //   resolvers: {
  //     Query: {
  //       getMeInfo: (_, d, { cache }) => {
  //         return defaultState.me;
  //       }
  //     },
  //     Mutation: {
  //       updateMeInfo: (_, { _id, email, firstName, lastName }, { cache }) => {
  //         // KIV
  //         console.log("CACHE", cache);
  //       },
  //       resetCurrentGame: (_, d, { cache }) => {
  //         cache.writeData({ data: defaultState });
  //         return defaultState.currentGame;
  //       },
  //       updateGame: (_, { index, value }, { cache }) => {
  //         const prevState = cache.readQuery({ query: CURRENT_GAME });
  //         const data = {
  //           currentGame: {
  //             ...prevState.currentGame,
  //             [index]: value
  //           }
  //         };
  //         cache.writeData({
  //           query: CURRENT_GAME,
  //           data
  //         });
  //         return data.currentGame;
  //       }
  //     }
  //   }
  // },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log("GraphQL Error: ", graphQLErrors);
    }
    if (networkError) {
      console.log("Network Error: ", networkError);
    }
  }
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MyProvider>
          <Nav />
        </MyProvider>
      </ApolloProvider>
    );
  }
}

export default App;
