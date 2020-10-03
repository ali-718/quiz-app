import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("home");
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 350, height: 150 }}
        />
      </View>
    );
  }
}
