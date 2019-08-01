import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import React, { Component } from "react";
import styles from "./style";
import { Icon, Picker, PickerItem } from "native-base";
import ReactNativePickerModule from "react-native-picker-module";
import { Actions } from "react-native-router-flux";

const Menu = require("../../img/titles/newuser.png");
const Clip = require("../../img/clip.png");
const background = require("../../img/bgMain.png");

export default class NewUser extends Component {
  state = {
    ocultaSenha: "true",
    ocultaSenha2: "true",
    selectedValue: "Selecione o grau de escolaridade",
    data: [
      "Ensino Fundamental Completo",
      "Ensino Médio Incompleto",
      "Ensino Médio Completo",
      "Ensino Superior Incompleto",
      "Ensino Superior Completo",
      "Outro"
    ],
    selectedValueUF: "Selecione o estado em que você reside",
    uf: [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
      "Não Resido no Brasil"
    ]
  };

  //   state = {
  //     login: "",
  //     senha: ""
  //   };
  //   handlerInput(state, value) {
  //     console.log(state, value);
  //     this.setState({
  //       [state]: value
  //     });
  //   }

  recebeNome() {
    return (
      <View>
        <Text style={styles.text}>Nome Completo</Text>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
  recebeEscolaridade() {
    return (
      <View>
        <Text style={styles.text}>Escolaridade</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            this.pickerEscolaridade.show();
          }}
        >
          <Text style={styles.textPicker}>{this.state.selectedValue}</Text>
        </TouchableOpacity>

        <ReactNativePickerModule
          pickerRef={e => (this.pickerEscolaridade = e)}
          value={this.state.selectedValue}
          title={"Selecione o grau de escolaridade"}
          items={this.state.data}
          onCancel={() => {
            console.log("Cancelado");
          }}
          onValueChange={(value, index) => {
            console.log("value: ", value);
            console.log("index: ", index);
            this.setState({
              selectedValue: value,
              selectedIndex: index
            });
          }}
        />
      </View>
    );
  }

  recebeEstado() {
    return (
      <View>
        <Text style={styles.text}>Estado</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => {
            this.pickerUF.show();
          }}
        >
          <Text style={styles.textPicker}>{this.state.selectedValueUF}</Text>
        </TouchableOpacity>
        <ReactNativePickerModule
          pickerRef={e => (this.pickerUF = e)}
          value={this.state.selectedUF}
          title={"Selecione o estado em que reside"}
          items={this.state.uf}
          onCancel={() => {
            console.log("Cancelado");
          }}
          onValueChange={(value, index) => {
            console.log("valueUF: ", value);
            console.log("indexUF: ", index);
            this.setState({
              selectedValueUF: value,
              selectedIndexUF: index
            });
          }}
        />
      </View>
    );
  }
  recebeIdade() {
    return (
      <View>
        <Text style={styles.text}>Idade</Text>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
  recebeEmail() {
    return (
      <View>
        <Text style={styles.text}>E-mail</Text>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
  recebeSenha() {
    return (
      <View>
        <Text style={styles.text}>Senha</Text>
        <Text style={styles.subtext}>
          A senha deve possuir pelo menos 6 caracteres
        </Text>
        <View style={styles.alignButtons}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={this.state.ocultaSenha}
            textContentType={"password"}
          />
          <TouchableOpacity>
            <Icon
              name="ios-eye"
              style={styles.textEye}
              onPress={this.exibirPassword}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  recebeSenhaConf() {
    return (
      <View>
        <Text style={styles.text}>Confirmar Senha</Text>
        <View style={styles.alignButtons}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={this.state.ocultaSenha2}
            textContentType={"password"}
          />
          <TouchableOpacity>
            <Icon
              name="ios-eye"
              style={styles.textEye}
              onPress={this.exibirPassword2}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  exibirPassword = () =>
    this.setState({ ocultaSenha: !this.state.ocultaSenha });

  exibirPassword2 = () =>
    this.setState({ ocultaSenha2: !this.state.ocultaSenha2 });

  buttonCadastro() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Cadastrar</Text>
        <Icon name="ios-arrow-forward" style={styles.textButton} />
      </TouchableOpacity>
    );
  }

  buttonReturn() {
    return (
      <TouchableOpacity style={styles.buttonBack} onPress={this.returnLogin}>
        <Icon name="ios-arrow-back" style={styles.textButtonBack} />
        <Text style={styles.textButtonBack}>Voltar</Text>
      </TouchableOpacity>
    );
  }
  returnLogin = () => {
    Actions.pop();
    console.log("Retorna para a página inicial");
  };

  render() {
    return (
      <View style={styles.main}>
        <ImageBackground
          style={styles.background}
          resizeMode="stretch"
          source={background}
        >
          <ScrollView style={styles.ScrollV}>
            <Image source={Menu} style={styles.image} />
            <View style={styles.subHeader}>
              <Image source={Clip} style={styles.clip} resizeMode="contain" />
              {this.recebeNome()}
              {this.recebeEscolaridade()}
              {this.recebeIdade()}
              {this.recebeEstado()}
              {this.recebeEmail()}
              {this.recebeSenha()}
              {this.recebeSenhaConf()}
            </View>
            <View style={styles.alignButtons}>
              {this.buttonReturn()}
              {this.buttonCadastro()}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
