import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { Thumbnail, Icon } from "native-base";

export default class Profile extends Component {
  renderInfo() {
    return (
      <View style={styles.profileInfo}>
        <Thumbnail source={require("../../../img/profile.jpeg")} />
        <Text style={styles.textProfile}>Raimunda de Alcântara</Text>
      </View>
    );
  }

  renderLogout() {
    return (
      <TouchableOpacity style={styles.buttonLogout}>
        <Icon name="md-log-out" />
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity>
    );
  }

  buttonEdit() {
    return (
      <TouchableOpacity style={styles.buttonEdit}>
        <Icon name="md-log-out" />
        <Text style={styles.textButton}>Editar</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.main}>
        <View>
          {this.renderInfo()}
          <View style={styles.profileButtons}>
            {this.buttonEdit()}
            {this.renderLogout()}
          </View>
        </View>
      </View>
    );
  }
}
