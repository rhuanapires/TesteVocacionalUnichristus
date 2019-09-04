import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert
} from "react-native";
import React, { Component } from "react";
import styles from "./style";
import { Icon } from "native-base";
import ReactNativePickerModule from "react-native-picker-module";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

const Menu = require("../../img/titles/newuser.png");
const Clip = require("../../img/clip.png");
const background = require("../../img/bgMain.png");

export default class Questao01 extends Component {
  state = {
    ocultaSenha: true,
    ocultaSenha2: true,
    selectedValue: "Selecione o grau de escolaridade",
    escolaridade: [
      "Fundamental Completo",
      "Médio Incompleto",
      "Médio Completo",
      "Superior Incompleto",
      "Superior Completo",
      "Outro"
    ],
    escolaridade2: ["1", "2", "3", "4", "5", "6"],
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
    ],

    nomeCompleto: "",
    idade: "",
    eMail: "",
    senha: "",
    confirmaSenha: ""
  };

  handlerInput(state, value) {
    console.log(state, value);
    this.setState({
      [state]: value
    });
  }

  recebeNome() {
    return (
      <View>
        <Text style={styles.text}>Nome Completo</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.nomeCompleto}
          onChangeText={novoNome => {
            this.handlerInput("nomeCompleto", novoNome);
          }}
        />
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
          value={this.state.selectedEscolaridade}
          title={"Selecione o grau de escolaridade"}
          items={this.state.escolaridade}
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
        <TextInput
          style={styles.textInput}
          value={this.state.idade}
          keyboardType="decimal-pad"
          onChangeText={novaIdade => {
            this.handlerInput("idade", novaIdade.replace(".", ""));
          }}
        />
      </View>
    );
  }
  recebeEmail() {
    return (
      <View>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          keyboardType={"email-address"}
          autoCapitalize="none"
          style={styles.textInput}
          value={this.state.eMail}
          onChangeText={novoEmail => {
            this.handlerInput("eMail", novoEmail);
          }}
        />
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
            value={this.state.senha}
            onChangeText={novaSenha => {
              this.handlerInput("senha", novaSenha);
            }}
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
            value={this.state.ConfirmaSenha}
            onChangeText={novaConfirmaSenha =>
              this.handlerInput("confirmaSenha", novaConfirmaSenha)
            }
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

  confereDados = () => {
    let erros = [];
    var msgErro = "";

    // Verifica nome vazio
    if (!this.state.nomeCompleto) {
      erros.push({
        id: "nomeCompleto",
        mensagem: "O nome precisa estar preenchido!"
      });
    }

    // Verifica a escolaridade
    if (this.state.selectedValue === "Selecione o grau de escolaridade") {
      erros.push({
        id: "escolaridade",
        mensagem: "É necessário selecionar uma escolaridade"
      });
    }

    // Verifica a idade
    if (this.state.idade.length > 2 || this.state.idade <= 0) {
      erros.push({
        id: "idade",
        mensagem: "Digite uma idade válida"
      });
    }

    // Verifica o estado
    if (
      this.state.selectedValueUF === "Selecione o estado em que você reside"
    ) {
      erros.push({
        id: "estado",
        mensagem: "Selecione um estado válido"
      });
    }

    // Verifica e-mail vazio, sem @ e sem .
    if (
      !this.state.eMail ||
      !this.state.eMail.includes("@") ||
      !this.state.eMail.includes(".") ||
      this.state.eMail.indexOf("@") > this.state.eMail.lastIndexOf(".")
    ) {
      erros.push({
        id: "e-mail",
        mensagem: "O e-mail é inválido!"
      });
    }

    // senha vazia e/ou inválida
    if (
      !this.state.senha ||
      this.state.senha !== this.state.confirmaSenha ||
      this.state.senha < 6
    ) {
      erros.push({
        id: "senha",
        mensagem: "A senha é inválida!"
      });
    }

    // exibe erros
    if (erros.length !== 0) {
      erros.forEach(p => {
        msgErro = msgErro + "\n" + p.mensagem;
      });

      Alert.alert(
        "Erro ao criar a conta",
        msgErro,
        [
          {
            text: "OK, corrigir meus dados"
          }
        ],
        { cancelable: false }
      );
    } else {
      this.saveLogin();
    }
  };

  saveLogin() {
    const { eMail, senha } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(eMail, senha)
      .then(credential => {
        this.saveUser();
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        Alert.alert("Erro!", error.userInfo.NSLocalizedDescription, [
          {
            text: "Ok! Corrigir os dados"
          }
        ]);
      });
  }

  saveUser() {
    const users = firebase
      .firestore()
      .collection("users")
      .doc(this.state.eMail);
    users
      .set({
        nomeCompleto: this.state.nomeCompleto,
        idade: this.state.idade,
        eMail: this.state.eMail,
        escolaridade: this.state.selectedValue,
        uf: this.state.selectedValueUF
      })
      .then(result =>
        Alert.alert("Tudo certo!", "Conta criada com sucesso!", [
          {
            text: "Ok!",
            onPress: () => Actions.pop()
          }
        ])
      )
      .catch(error => alert(JSON.stringify(error)));
  }

  exibirPassword = () =>
    this.setState({ ocultaSenha: !this.state.ocultaSenha });

  exibirPassword2 = () =>
    this.setState({ ocultaSenha2: !this.state.ocultaSenha2 });

  buttonCadastro() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.confereDados}>
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
            <View style={styles.viewFooter}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
