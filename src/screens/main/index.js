import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import Profile from "./profile";
import Menu from "./menu";

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <Profile />
        <Menu />
      </View>
    );
  }
}
