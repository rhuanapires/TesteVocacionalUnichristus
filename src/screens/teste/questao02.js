import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Alert
} from "react-native";
import React, { Component } from "react";
import styles from "./style";
import { Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import { opsQuestao2 } from "./teste";

const Clip = require("../../img/clip.png");
const background = require("../../img/bgMain.png");
const checked = require("../../img/radioCheck/checked.png");
const unchecked = require("../../img/radioCheck/unchecked.png");

export default class Questao02 extends Component {
  state = {
    listItems: opsQuestao2
  };
  constructor(props) {
    super(props);
    console.log(props.markedItems);
  }
  handlerInput(state, value) {
    console.log(state, value);
    this.setState({
      [state]: value
    });
  }

  question() {
    return (
      <View>
        <Text style={styles.text}>
          Dentre as atividades abaixo, selecione as de seu interesse
        </Text>
        <Text style={styles.subtext}>Escolha até 3 opções</Text>
      </View>
    );
  }

  renderListRadios() {
    const { listItems } = this.state;

    return (
      <FlatList
        data={listItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => this.renderRadioButton(item)}
      />
    );
  }

  renderRadioButton(option, id) {
    return (
      <TouchableOpacity
        style={styles.alignItems}
        onPress={() => this.handlerChecked(option.id)}
      >
        <Image
          style={styles.image}
          source={option.checked ? checked : unchecked}
        />
        <Text style={styles.textRadioButtons}>{option.title}</Text>
      </TouchableOpacity>
    );
  }

  handlerChecked(id) {
    let { listItems } = this.state;

    listItems = listItems.map(item => {
      if (item.id === id) {
        if (item.checked) {
          item.checked = !item.checked;
        } else {
          let marcados = listItems.filter(p => p.checked);
          if (marcados.length >= 3) {
            Alert.alert(
              "Erro",
              "Deve-se selecionar até 3 opções",
              [
                {
                  text: "OK, entendi!"
                }
              ],
              { cancelable: false }
            );
          } else {
            item.checked = !item.checked;
          }
        }
      }
      return item;
    });
    this.setState({ listItems });
  }

  buttonNext() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.nextQuestion}>
        <Text style={styles.textButton}>Próxima Questão</Text>
        <Icon name="ios-arrow-forward" style={styles.textButton} />
      </TouchableOpacity>
    );
  }

  nextQuestion = () => {
    const { listItems } = this.state;
    const { markedItems } = this.props;
    const selectedItems = listItems.filter(p => p.checked);
    if (selectedItems.length < 1) {
      Alert.alert(
        "Erro",
        "Deve-se selecionar pelo menos uma opção",
        [{ text: "OK, marcar alternativas" }],
        { cancelable: false }
      );
    } else {
      const recebeArray = [...markedItems, ...selectedItems];
      Actions.questao03({ markedItems: recebeArray });
    }
  };

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
    console.log("Retorna para a questão 01");
  };

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
            {this.question()}
            {this.renderListRadios()}
          </View>
          <View style={styles.alignButtons}>
            {this.buttonReturn()}
            {this.buttonNext()}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
