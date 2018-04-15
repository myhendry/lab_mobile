import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { graphql, compose } from "react-apollo";
import { Icon, Button } from "react-native-elements";
import { gql } from "apollo-boost";

import { CURRENT_GAME } from "../graphql/queries";
import { UPDATE_GAME, CREATE_SCORE, RESET_GAME } from "../graphql/mutations";

class StateScreen extends Component {
  state = {};

  _createScore = async () => {
    const {
      createScore,
      resetGame,
      data: { currentGame }
    } = this.props;
    try {
      await createScore({
        variables: {
          ...currentGame
        }
      });
      await resetGame();
      // this.setState({ created: true })
    } catch (error) {
      throw error;
      // this.setState({ error: true })
    }
  };

  render() {
    // console.log("PROPS StateScreen", this.props);
    const {
      data: {
        loading,
        currentGame: { teamAName, teamAScore, teamBName, teamBScore }
      },
      updateGame,
      createScore
    } = this.props;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.textStyle}>{teamAName}</Text>
            <Text style={styles.textStyle}>{teamAScore}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              raised
              name="ios-american-football"
              type="ionicon"
              color="#f50"
              onPress={() =>
                updateGame({
                  variables: {
                    index: "teamAScore",
                    value: parseInt(teamAScore) + 1
                  }
                })
              }
            />
          </View>
          <View />
        </View>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.textStyle}>{teamBName}</Text>
            <Text style={styles.textStyle}>{teamBScore}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              raised
              name="ios-american-football"
              type="ionicon"
              color="#f50"
              onPress={() =>
                updateGame({
                  variables: {
                    index: "teamBScore",
                    value: parseInt(teamBScore) + 1
                  }
                })
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="CREATE SCORE" onPress={this._createScore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 15
  },
  textStyle: {
    fontSize: 25,
    padding: 15
  },
  iconContainer: {
    alignItems: "center"
  },
  buttonContainer: {
    paddingTop: 20
  }
});

export default compose(
  graphql(CURRENT_GAME),
  graphql(UPDATE_GAME, { name: "updateGame" }),
  graphql(CREATE_SCORE, { name: "createScore" }),
  graphql(RESET_GAME, { name: "resetGame" })
)(StateScreen);
