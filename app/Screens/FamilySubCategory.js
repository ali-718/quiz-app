import { Icon } from "native-base";
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
import { Green, ThemeColor } from "../Config";

export default class FamilySubCategory extends Component {
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
        <SafeAreaView
          style={{
            width: "100%",
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              width: 70,
              padding: 15,
              backgroundColor: "white",
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              alignItems: "flex-end",
              marginTop: 10,
            }}
          >
            <Icon name="arrowleft" type="AntDesign" style={{ color: Green }} />
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Quiz2")}
              style={{
                width: "95%",
                height: 100,
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
                source={require("../../assets/goverment.png")}
                style={{ width: 250, height: 50 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "95%",
                height: 100,
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
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/ladies.png")}
                style={{ width: 250, height: 60 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "95%",
                height: 100,
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
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/theatre.png")}
                style={{ width: 250, height: 65 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "95%",
                height: 100,
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
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/esports.png")}
                style={{ width: 250, height: 55 }}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
