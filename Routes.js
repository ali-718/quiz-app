import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./app/Screens/Splash";
import Login from "./app/Screens/Login";
import Home from "./app/Screens/Home";
import FamilySubCategory from "./app/Screens/FamilySubCategory";
import LocationScreen from "./app/Screens/LocationScreen";
import Quiz1 from "./app/Screens/Quiz1";
import Quiz2 from "./app/Screens/Quiz2";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="splash"
      component={Splash}
    />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="location"
      component={LocationScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="login"
      component={Login}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="home"
      component={Home}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="FamilySub"
      component={FamilySubCategory}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Quiz1"
      component={Quiz1}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Quiz2"
      component={Quiz2}
    />
  </Stack.Navigator>
);

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthStack}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={HomeStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
