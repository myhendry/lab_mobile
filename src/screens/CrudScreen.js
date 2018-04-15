import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { graphql, compose } from "react-apollo";

import { CardSection, Input, Button } from "../components/common";
import { GET_TWEETS } from "../graphql/queries";
import { ADD_TWEET, DELETE_TWEET } from "../graphql/mutations";

class CrudScreen extends React.Component {
  state = {
    text: ""
  };

  componentDidMount() {
    // console.log("THIS PROPS", this.props);
  }

  _textChange = text => this.setState({ text });

  _addTweet = async () => {
    await this.props.addTweet({
      variables: {
        text: this.state.text
      },
      update: (cache, { data: { addTweet } }) => {
        const { getTweets } = cache.readQuery({ query: GET_TWEETS });
        cache.writeQuery({
          query: GET_TWEETS,
          data: {
            getTweets: getTweets.concat(addTweet)
          }
        });
      }
    });
    this.setState({ text: "" });
    // this.props.data.refetch();
  };

  _deleteTweet = async id => {
    await this.props.deleteTweet({
      variables: {
        _id: id
      },
      update: (cache, { data: { deleteTweet } }) => {
        const { getTweets } = cache.readQuery({ query: GET_TWEETS });
        cache.writeQuery({
          query: GET_TWEETS,
          data: {
            getTweets: getTweets.filter(t => t._id !== deleteTweet.id)
          }
        });
      }
    });
    // this.props.data.refetch();
  };

  render() {
    const { data } = this.props;

    if (data.loading) {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <CardSection>
            <Input
              placeholder="Enter Text"
              onChangeText={this._textChange}
              value={this.state.text}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this._addTweet}>
              <Text>Enter</Text>
            </Button>
          </CardSection>
          <FlatList
            data={data.getTweets}
            renderItem={({ item }) => (
              <ListItem
                title={item.text}
                leftIcon={
                  <Icon
                    raised
                    name="heartbeat"
                    type="font-awesome"
                    color="#f50"
                    onPress={() => this._deleteTweet(item._id)}
                  />
                }
                onPress={() => this.props.navigation.navigate("More", item)}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default compose(
  graphql(ADD_TWEET, { name: "addTweet" }),
  graphql(DELETE_TWEET, { name: "deleteTweet" }),
  graphql(GET_TWEETS)
)(CrudScreen);
