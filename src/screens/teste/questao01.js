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
import { opsQuestao1 } from "./teste";

const Clip = require("../../img/clip.png");
const background = require("../../img/bgMain.png");
const checked = require("../../img/radioCheck/checked.png");
const unchecked = require("../../img/radioCheck/unchecked.png");

export default class Questao01 extends Component {
  state = {
    listItems: opsQuestao1
  };

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
          Selecione os ambientes de trabalho favoritos
        </Text>
        <Text style={styles.subtext}>
          Mínimo de uma opção e máximo de 5 opções
        </Text>
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
          if (marcados.length >= 5) {
            Alert.alert(
              "Erro",
              "Deve-se selecionar até 5 opções",
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
    const selectedItems = listItems.filter(p => p.checked);
    if (selectedItems.length < 1) {
      Alert.alert(
        "Erro",
        "Deve-se selecionar pelo menos uma opção",
        [{ text: "OK, marcar alternativas" }],
        { cancelable: false }
      );
    } else {
      Actions.questao02({ markedItems: selectedItems });
    }
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
          {this.buttonNext()}
        </ScrollView>
      </ImageBackground>
    );
  }
}