import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Main from "./src/screens/Main";
import { Tabs } from "./src/navigations";

import { CURRENT_GAME } from "./src/graphql/queries";

const defaultState = {
  currentGame: {
    __typename: "currentGame",
    teamAScore: 0,
    teamBScore: 0,
    teamAName: "Team A",
    teamBName: "Team B"
  }
};

const client = new ApolloClient({
  uri: "https://gqltoy.herokuapp.com/graphql",
  clientState: {
    defaults: defaultState,
    resolvers: {
      Query: {},
      Mutation: {
        resetCurrentGame: (_, d, { cache }) => {
          cache.writeData({ data: defaultState });
          return defaultState.currentGame;
        },
        updateGame: (_, { index, value }, { cache }) => {
          const prevState = cache.readQuery({ query: CURRENT_GAME });
          const data = {
            currentGame: {
              ...prevState.currentGame,
              [index]: value
            }
          };
          cache.writeData({
            query: CURRENT_GAME,
            data
          });
          return data.currentGame;
        }
      }
    }
  }
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  );
};

// import React from "react";
// import { ApolloClient, InMemoryCache, HttpLink, split } from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";

// import Main from "./src/screens/Main";

// const httpLink = new HttpLink({
//   uri: "http://localhost:5000/graphql"
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:5000/`,
//   options: {
//     reconnect: true
//   }
// });

// // To modify
// const link = () => {
//   wsLink, httpLink;
// };

// const client = new ApolloClient({ link, cache: new InMemoryCache() });

// export default () => {
//   return (
//     <ApolloProvider client={client}>
//       <Main />
//     </ApolloProvider>
//   );
// };
