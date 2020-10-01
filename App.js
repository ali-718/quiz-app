import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FamilySubCategory from "./app/Screens/FamilySubCategory";
import Quiz from "./app/Screens/Quiz";
import Splash from "./app/Screens/Splash";
import Routes from "./Routes";

export default function App() {
  return <Quiz />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
