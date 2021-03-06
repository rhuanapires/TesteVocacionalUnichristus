import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Actions } from "react-native-router-flux";

export default class Menu extends Component {
  iniciarTeste() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.teste}>
        <Image
          source={require("../../../img/buttons/iniciarteste.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    );
  }

  teste() {
    Actions.questao01();
  }
  secondButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../../../img/buttons/meusresultados.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    );
  }

  thirdButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../../../img/buttons/cursos.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    );
  }

  fourthButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../../../img/buttons/corte.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Image
          source={require("../../../img/buttons/menu.png")}
          style={styles.viewTitulo}
        />
        <View style={styles.viewButton}>
          {this.iniciarTeste()}
          {this.secondButton()}
        </View>
        <View style={styles.viewButton}>
          {this.thirdButton()}
          {this.fourthButton()}
        </View>
        <View style={styles.viewFooter} />
      </View>
    );
  }
}
