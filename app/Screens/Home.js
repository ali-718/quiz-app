import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { ThemeColor } from "../Config";

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.png")}
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            width: "95%",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "95%",
              height: 150,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/vrglass.png")}
              style={{ width: 150, height: 70, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 20,
                color: ThemeColor,
              }}
            >
              VR Quiz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("FamilySub")}
            style={{
              marginTop: 20,
              width: "95%",
              height: 150,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/family.png")}
              style={{ width: 170, height: 130 }}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                // marginLeft: 20,
                color: ThemeColor,
              }}
            >
              Family Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
