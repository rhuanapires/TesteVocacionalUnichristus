import React, { Component } from "react";
import style from "./style";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

// Variaveis com as imagens utilizadas na View
const logo = require("../../img/icon.png");
const login = require("../../img/login.png");
const senha = require("../../img/senha.png");
const background = require("../../img/background2.png");

export default class Login extends Component {
  state = {
    login: "",
    senha: ""
  };

  handlerInput(state, value) {
    console.log(state, value);
    this.setState({
      [state]: value
    });
  }

  componentDidMount() {
    console.log("teste");
    firebase
      .auth()
      .signInAnonymously()
      .then(credential => {
        if (credential) {
          console.log("default app user ->", credential.user.toJSON());
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }

  auth() {
    const { login, senha } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(login, senha)
      .then(credential => {
        console.log(JSON.stringify(credential));
        if (credential) {
          this.onPressEntrar();
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  renderButtonLogin() {
    return (
      <TouchableOpacity style={style.buttonLogin} onPress={() => this.auth()}>
        <Text style={style.textButton}>Entrar</Text>
      </TouchableOpacity>
    );
  }
  renderButtonSenha() {
    return (
      <TouchableOpacity onPress={() => this.onPressSenha()}>
        <Text style={style.textButtonSenha}>Esqueci minha senha</Text>
      </TouchableOpacity>
    );
  }

  renderButtonNewAccount() {
    return (
      <View style={style.viewAlinhar}>
        <Text style={style.text}>Novo usuário? </Text>
        <TouchableOpacity onPress={this.onPressNewAccount}>
          <Text style={style.textButtonNewAccount}>Criar nova Conta</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressEntrar() {
    console.log("Entrou");
    Actions.main();
  }

  onPressSenha() {
    console.log("Página de esqueceu a senha");
  }

  onPressNewAccount = () => {
    console.log("Página de cadastro de novo user");
    Actions.newUser();
  };

  renderLogin() {
    return (
      <View style={style.viewAlinhar}>
        <Image source={login} style={style.divisors} />
        <View style={style.buttonInput}>
          <TextInput
            value={this.state.login}
            onChangeText={novaPalavra => {
              this.handlerInput("login", novaPalavra);
            }}
            style={style.input}
          />
        </View>
      </View>
    );
  }

  renderSenha() {
    return (
      <View style={style.viewAlinhar}>
        <Image source={senha} style={style.divisors} />
        <View style={style.buttonInput}>
          <TextInput
            secureTextEntry={true}
            textContentType={"password"}
            value={this.state.senha}
            onChangeText={novaSenha => {
              this.handlerInput("senha", novaSenha);
            }}
            style={style.input}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground
        style={style.bg}
        resizeMode="stretch"
        source={background}
      >
        <View style={style.container}>
          <StatusBar barStyle="light-content" />
          <View style={style.main}>
            <Image source={logo} style={style.image} />
            {this.renderLogin()}
            {this.renderSenha()}
            {this.renderButtonSenha()}
            {this.renderButtonLogin()}
          </View>
          {this.renderButtonNewAccount()}
        </View>
      </ImageBackground>
    );
  }
}
