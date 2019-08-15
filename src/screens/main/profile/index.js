import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

const shadowProfile = require("./../../../img/shadowProfile.png");

export default class Profile extends Component {
  state = {
    user: ""
  };
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
        <Text style={styles.textProfile}>{this.state.user}</Text>
      </View>
    );
  }

  async componentDidMount() {
    const user = firebase.auth().currentUser;
    console.log(JSON.stringify(user));
    if (!user) {
      return;
    }
    const nameUser = firebase
      .firestore()
      .collection("users")
      .doc(user.email);

    const username = await nameUser.get();
    console.log(username.data());
    console.log(username.data().nomeCompleto);
    this.setUsername(username.data().nomeCompleto);
  }

  setUsername = username => {
    this.setState({ user: username });
  };

  renderLogout() {
    return (
      <TouchableOpacity style={styles.buttonLogout} onPress={this.logout}>
        <Icon name="md-log-out" style={styles.iconLogout} />
        <Text style={styles.textButtonLogout}>Logout</Text>
      </TouchableOpacity>
    );
  }

  logout = () => {
    firebase.auth().signOut();
    Actions.pop();
  };

  buttonEdit() {
    return (
      <TouchableOpacity style={styles.buttonEdit} onPress={this.edit}>
        <Icon name="md-create" style={styles.iconsEdit} />
        <Text style={styles.textButton}>Editar</Text>
      </TouchableOpacity>
    );
  }

  edit() {
    Actions.pop();
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
