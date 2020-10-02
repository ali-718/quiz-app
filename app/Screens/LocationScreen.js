import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { MapStateToProps, ThemeColor } from "../Config";
import { EnterLocation } from "../actions/AppActions";

class Login extends Component {
  state = {
    Location: "",
  };

  render() {
    return (
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
          <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
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
          <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.Location.trim() == "") {
                  alert("enter location");
                  return;
                }
                this.props.EnterLocation(this.state.Location);
                this.props.navigation.navigate("home");
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
              <Text style={{ color: "white", fontWeight: "bold" }}>إرسال</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(MapStateToProps, { EnterLocation })(Login);
