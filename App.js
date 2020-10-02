import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import FamilySubCategory from "./app/Screens/FamilySubCategory";
import Quiz from "./app/Screens/Quiz2";
import Splash from "./app/Screens/Splash";
import Routes from "./Routes";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
