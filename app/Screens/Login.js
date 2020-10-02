import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Green, MapStateToProps, ThemeColor } from "../Config";
import { EnterUser } from "../actions/AppActions";
import { connect } from "react-redux";
import { Icon } from "native-base";

class Login extends Component {
  state = {
    Name: "",
    Mobile: "",
    from: "",
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      const from = this.props.route.params.from;
      console.log(from);

      this.setState({
        Name: "",
        Mobile: "",
        from,
      });
    });
  }

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
              backgroundColor: Green,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              alignItems: "flex-end",
              marginTop: 10,
            }}
          >
            <Icon
              name="arrowleft"
              type="AntDesign"
              style={{ color: "white" }}
            />
          </TouchableOpacity>

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
                  this.setState({ Name: val });
                }}
                value={this.state.Name}
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
                placeholder="اسمك"
                placeholderTextColor={ThemeColor}
              />
              <TextInput
                onChangeText={(val) => {
                  this.setState({ Mobile: val });
                }}
                autoCapitalize="none"
                value={this.state.Mobile}
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
                keyboardType="numeric"
                placeholder="رقمك"
                placeholderTextColor={ThemeColor}
              />
            </View>
            <View
              style={{ marginTop: 20, width: "100%", alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.EnterUser({
                    name: this.state.Name,
                    mobile: this.state.Mobile,
                  });
                  this.props.navigation.navigate(this.state.from);
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
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default connect(MapStateToProps, { EnterUser })(Login);
