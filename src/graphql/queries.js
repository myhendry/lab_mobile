import { gql } from "apollo-boost";

export const ME_QUERY = gql`
  {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;

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

export const GET_ME_INFO = gql`
  {
    getMeInfo @client {
      __typename
      _id
      email
      firstName
      lastName
    }
  }
`;
