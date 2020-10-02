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
  ScrollView,
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
          <ScrollView style={{ width: "100%", flex: 1 }}>
            <View
              style={{
                width: "100%",
                flex: 0.2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/whitelogo.png")}
                style={{ width: 250, height: 110 }}
              />
            </View>

            <View
              style={{
                width: "100%",
                flex: 1,
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Quiz1")}
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
                  source={require("../../assets/sports.png")}
                  style={{ width: 130, height: 130 }}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: ThemeColor,
                  }}
                >
                  رياضه
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Quiz2")}
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
                  source={require("../../assets/esports.png")}
                  style={{ width: 130, height: 130 }}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: ThemeColor,
                  }}
                >
                  رياضة الكترونية
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Quiz3")}
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
                  source={require("../../assets/art.png")}
                  style={{ width: 130, height: 130 }}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: ThemeColor,
                  }}
                >
                  فن
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Quiz4")}
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
                  source={require("../../assets/woman.png")}
                  style={{ width: 130, height: 130 }}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: ThemeColor,
                  }}
                >
                  المرأة
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
