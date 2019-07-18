import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";

export default class Menu extends Component {
  iniciarTeste() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>Iniciar Teste</Text>
      </TouchableOpacity>
    );
  }

  secondButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>Histórico de Resultados</Text>
      </TouchableOpacity>
    );
  }

  thirdButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>Só deus</Text>
      </TouchableOpacity>
    );
  }

  fourthButton() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>Mordekaiser</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.viewButton}>
          {this.iniciarTeste()}
          {this.secondButton()}
        </View>
        <View style={styles.viewButton}>
          {this.thirdButton()}
          {this.fourthButton()}
        </View>
      </View>
    );
  }
}
