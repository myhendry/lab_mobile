import React, { Component } from "react";
import { View, Text } from "react-native";
import { MyContext } from "../MyProvider";

class ShowContext extends Component {
  state = {};
  render() {
    return (
      <View>
        <MyContext.Consumer>
          {context => (
            <View>
              <Text>PASSING VALUES DOWN FROM MYPROVIDER CONTEXT COMPONENT</Text>
              <Text>{context.state.name}</Text>
              <Text>{context.state.connectionStatus.toString()}</Text>
            </View>
          )}
        </MyContext.Consumer>
      </View>
    );
  }
}

export default ShowContext;
