import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { Icon } from "native-base";

const shadowProfile = require("./../../../img/shadowProfile.png");

export default class Profile extends Component {
  renderInfo() {
    return (
      <View style={styles.profileInfo}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../../../img/profile.jpeg")}
          />
        </View>
        <Image source={shadowProfile} style={styles.shadowProfile} />
        <Text style={styles.textProfile}>Raimunda de Alcântara</Text>
      </View>
    );
  }

  renderLogout() {
    return (
      <TouchableOpacity style={styles.buttonLogout}>
        <Icon name="md-log-out" style={styles.iconLogout} />
        <Text style={styles.textButtonLogout}>Logout</Text>
      </TouchableOpacity>
    );
  }

  buttonEdit() {
    return (
      <TouchableOpacity style={styles.buttonEdit}>
        <Icon name="md-create" style={styles.iconsEdit} />
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
