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
  Modal,
  TextInput,
} from "react-native";
import { Green, MapStateToProps, ThemeColor } from "../Config";
import { EnterLocation } from "../actions/AppActions";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    modal: false,
    Location: "",
  };
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
        <Modal animated animationType="slide" visible={this.state.modal}>
          <View
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Logo.png")}
                style={{ width: 350, height: 150 }}
              />
              <View
                style={{ width: "100%", marginTop: 50, alignItems: "center" }}
              >
                <TextInput
                  autoCapitalize="none"
                  onChangeText={(val) => {
                    this.setState({ Location: val });
                  }}
                  value={this.state.Location}
                  style={{
                    borderWidth: 2,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "rgba(220,220,220,0.3)",
                    marginTop: 10,
                    height: 50,
                    fontSize: 20,
                    paddingRight: 10,
                    borderColor: ThemeColor,
                    textAlign: "right",
                  }}
                  placeholder="موقع"
                  placeholderTextColor={ThemeColor}
                />
              </View>
              <View
                style={{ marginTop: 20, width: "100%", alignItems: "center" }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.EnterLocation(this.state.Location);
                    this.setState({
                      modal: false,
                    });
                  }}
                  style={{
                    backgroundColor: ThemeColor,
                    width: "80%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    إرسال
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      modal: false,
                    });
                  }}
                  style={{
                    backgroundColor: "tomato",
                    width: "80%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <SafeAreaView
          style={{
            width: "100%",
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ modal: true })}
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
            <Icon name="location-pin" type="Entypo" style={{ color: Green }} />
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flex: 0.4,
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
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push("login", { from: "QuizVR" })
              }
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
                الواقع الافتراضي
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
                ألعاب تريفيا
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default connect(MapStateToProps, { EnterLocation })(Home);
