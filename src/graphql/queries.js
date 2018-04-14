import { gql } from "apollo-boost";

export const GET_TWEETS = gql`
  {
    getTweets {
      text
      _id
      createdAt
    }
  }
`;

// Using Apollo Link State
export const CURRENT_GAME = gql`
  {
    currentGame @client {
      __typename
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`;
