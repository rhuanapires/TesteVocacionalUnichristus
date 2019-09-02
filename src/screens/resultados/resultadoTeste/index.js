import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView, Image } from "react-native";
import styles from "./style";
import { ActivityIndicator } from "react-native-paper";

const Clip = require("../../../img/clip.png");
const cursos = require("../../../img/titles/cursos.png");

export default class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: true,
    background: undefined,
    title: undefined
  };

  componentDidMount() {
    this.calculaResultado();
  }

  calculaResultado() {
    const { markedItems } = this.props;
    const indices = markedItems.map(indice => {
      return indice.id;
    });
    console.log(indices);
    const exatas = [
      2,
      5,
      9,
      12,
      13,
      14,
      16,
      17,
      18,
      20,
      21,
      22,
      24,
      28,
      29,
      31,
      33,
      34,
      35
    ];
    const csociais = [10, 14, 16, 28, 32, 33, 35];
    const saude = [1, 3, 4, 6, 7, 8, 15, 19, 23, 24, 25, 26, 34, 35, 36];
    const chumanas = [7, 10, 11, 12, 14, 15, 19, 27, 30, 35];
    const exatas1 = this.recebearray(indices, exatas);
    const csociais1 = this.recebearray(indices, csociais);
    const saude1 = this.recebearray(indices, saude);
    const chumanas1 = this.recebearray(indices, chumanas);
    this.retornaResultado(exatas1, csociais1, saude1, chumanas1);
  }

  recebearray(indice, result) {
    var contadorResultado = 0;

    for (var i = 0; i < indice.length; i++) {
      for (var j = 0; j < result.length; j++) {
        if (indice[i] === result[j]) {
          contadorResultado += 1;
          j = result.length;
        } else {
          if (indice[i] < result[j]) {
            j = result.length;
          }
        }
      }
    }
    const afinidade = contadorResultado / result.length;
    console.log(afinidade);
    return afinidade;
  }

  retornaResultado(v1, v2, v3, v4) {
    if (v1 > v2 && v1 > v3 && v1 > v4) {
      this.retornaExatas();
    } else if (v2 > v3 && v2 > v4 && v2 > v1) {
      this.retornaCSociais();
    } else if (v3 > v4 && v3 > v2 && v3 > v1) {
      this.retornaSaude();
    } else {
      this.retornaCHumanas();
    }
  }

  retornaExatas() {
    this.setState({
      background: require("../../../img/results/exatas.png"),
      title: require("../../../img/titles/exatas.png"),
      loading: false
    });
  }

  retornaCSociais() {
    this.setState({
      background: require("../../../img/results/csociais.png"),
      title: require("../../../img/titles/csociais.png"),
      loading: false
    });
  }

  retornaSaude() {
    this.setState({
      background: require("../../../img/results/saude.png"),
      title: require("../../../img/titles/saude.png"),
      loading: false
    });
  }
  retornaCHumanas() {
    this.setState({
      background: require("../../../img/results/chumanas.png"),
      title: require("../../../img/titles/chumanas.png"),
      loading: false
    });
  }

  exibeTexto() {
    const { markedItems } = this.props;
    const exibeItems = JSON.stringify(markedItems);
    return <Text style={styles.text}>{exibeItems}</Text>;
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <ActivityIndicator />;
    } else {
      return (
        <ScrollView style={styles.ScrollV}>
          <ImageBackground
            style={styles.background}
            resizeMode="stretch"
            source={this.state.background}
          >
            <View style={styles.unify}>
              <Image source={this.state.title} style={styles.image} />
              <View style={styles.subHeader}>
                <Image source={Clip} style={styles.clip} resizeMode="contain" />
                {this.exibeTexto()}
              </View>
              <View style={styles.subHeader2}>
                <Image source={cursos} style={styles.cursos} />
                <Text style={styles.text}>Engenharias</Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      );
    }
  }
}
