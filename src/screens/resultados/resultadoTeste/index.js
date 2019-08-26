import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView, Image } from "react-native";
import styles from "./style";

const Clip = require("../../../img/clip.png");
const background = require("../../../img/bgMain.png");

export default class Resultado extends Component {
  constructor(props) {
    super(props);
    console.log(props.markedItems);
  }

  exibeTexto() {
    const { markedItems } = this.props;
    const exibeItems = JSON.stringify(markedItems);
    console.log(exibeItems.title);
    return <Text style={styles.text}>{exibeItems}</Text>;
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={background}
      >
        <ScrollView style={styles.ScrollV}>
          <View style={styles.subHeader}>
            <Image source={Clip} style={styles.clip} resizeMode="contain" />
            {this.exibeTexto()}
          </View>
          <View style={styles.subHeader2}>
            <Text style={styles.textSubtitles}>Cursos Sugeridos</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
