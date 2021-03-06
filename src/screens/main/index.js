import React, { Component } from "react";
import { View, ImageBackground, StatusBar, ScrollView } from "react-native";
import Profile from "./profile";
import Menu from "./menu";
import styles from "./style";

const background = require("./../../img/bgMain.png");

export default class Main extends Component {
  render() {
    return (
      <View style={styles.main}>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <ImageBackground source={background} style={styles.background}>
          <ScrollView style={{ flex: 1 }}>
            <Profile />
            <Menu />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
