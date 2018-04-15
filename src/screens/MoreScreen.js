import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";

import faker from "faker";

import { fakeAvatar } from "../config/constants";

class MoreScreen extends Component {
  state = {};
  render() {
    const profile = this.props.navigation.state.params;
    const pic = faker.image.imageUrl();

    return (
      <View>
        <Card
          title={profile.text}
          image={require("../assets/reactimg.png")}
          imageProps={{ resizeMode: "contain" }}
          imageStyle={styles.img}
          imageWrapperStyle={{ alignItems: "center" }}
        >
          <Text>{profile._id}</Text>
          <Text>{profile.createdAt}</Text>
          <Button
            icon={{ name: "code" }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    );
  }
}

const styles = {
  img: {
    height: 80,
    width: 60
  }
};

export default MoreScreen;
