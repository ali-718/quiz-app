import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{ width: "90%", justifyContent: "space-around", flex: 0.9 }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/Fitness.png")}
                style={{ width: 80, height: 80, marginRight: 10 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Fitness</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/Spa.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Spa</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/Skating.png")}
                style={{ width: 80, height: 80, marginRight: 10 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Skating</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/Travelling.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Travelling</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/food.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Fooding</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/legal.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>
                Law {"&"} Order
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/reading.png")}
                style={{ width: 80, height: 80, marginRight: 10 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Reading</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 130,
                height: 130,
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
              }}
            >
              <Image
                source={require("../../assets/Cycling.png")}
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ marginTop: 10, color: "black" }}>Cycling</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
