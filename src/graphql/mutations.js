import { gql } from "apollo-boost";

export const SIGN_UP = gql`
  mutation(
    $email: String!
    $password: String!
    $fullName: String!
    $username: String
  ) {
    signup(
      email: $email
      password: $password
      fullName: $fullName
      username: $username
    ) {
      token
    }
  }
`;

export const LOG_IN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_TWEET = gql`
  mutation($text: String!) {
    addTweet(text: $text) {
      text
      _id
      createdAt
    }
  }
`;

export const DELETE_TWEET = gql`
  mutation($_id: ID!) {
    deleteTweet(_id: $_id) {
      id
      message
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation($index: String!, $value: String!) {
    updateGame(index: $index, value: $value) @client {
      teamAName
      teamBName
      teamAScore
      teamBScore
    }
  }
`;

export const CREATE_SCORE = gql`
  mutation(
    $teamAName: String!
    $teamBName: String!
    $teamAScore: Int!
    $teamBScore: Int!
  ) {
    createScore(
      teamAName: $teamAName
      teamBName: $teamBName
      teamAScore: $teamAScore
      teamBScore: $teamBScore
    ) {
      teamAName
      teamBName
      teamAScore
      teamBScore
    }
  }
`;

export const RESET_GAME = gql`
  mutation {
    resetCurrentGame @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`;
