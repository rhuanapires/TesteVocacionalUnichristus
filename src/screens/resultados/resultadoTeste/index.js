import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import styles from "./style";
import {
  cursossaude,
  cursoscsociais,
  cursosexatas,
  cursoschumanas
} from "./description";
import { Icon } from "native-base";

const Clip = require("../../../img/clip.png");
const cursos = require("../../../img/titles/cursos.png");

export default class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: true,
    background: undefined,
    title: undefined,
    description: "",
    courses: "",
    exatas: cursosexatas,
    saude: cursossaude,
    csociais: cursoscsociais,
    chumanas: cursoschumanas
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
    const { exatas } = this.state;

    this.setState({
      background: require("../../../img/results/exatas.png"),
      title: require("../../../img/titles/exatas.png"),
      loading: false,
      description:
        "Ciências Exatas são as ciências que têm a Matemática, a Química e a Física como peças fundamentais dos seus estudos.Além das 3 áreas básicas e todas as suas subdivisões, tais como Física Quântica e Físico-Química, entre as ciências que também são consideradas exatas temos: Astronomia, Estatística, Ciência da Computação e Arquitetura. A principal característica das carreiras e dos profissionais da área de exatas é o Raciocínio Lógico.",
      courses: exatas
    });
  }

  retornaCSociais() {
    const { csociais } = this.state;

    this.setState({
      background: require("../../../img/results/csociais.png"),
      title: require("../../../img/titles/csociais.png"),
      loading: false,
      description:
        "A área de Ciências Sociais Aplicadas reúne campos de conhecimento interdisciplinares, voltados para os aspectos sociais das diversas realidades humanas.",
      courses: csociais
    });
  }

  retornaSaude() {
    const { saude } = this.state;

    this.setState({
      background: require("../../../img/results/saude.png"),
      title: require("../../../img/titles/saude.png"),
      loading: false,
      description:
        "As ciências da saúde ou ciências médicas são as áreas de estudo relacionadas com a vida, a saúde e a doença. Geralmente os estudantes que tendem a fazer vestibular nessa área possuem aptidão com as disciplinas de química e biologia.",
      courses: saude
    });
  }
  retornaCHumanas() {
    const { chumanas } = this.state;
    this.setState({
      background: require("../../../img/results/chumanas.png"),
      title: require("../../../img/titles/chumanas.png"),
      loading: false,
      description:
        "Ciências Humanas são as ciências que tratam do aspecto humano do homem. Relacionadas a arte, beleza, filosofia e comunicação. A expressão Ciências Humanas em si refere-se somente àquelas ciências que têm o ser humano como seu objeto de estudo ou foco.",
      courses: chumanas
    });
  }
  renderListCursos() {
    const { courses } = this.state;

    console.log(courses);

    return (
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => this.renderItemCurso(item)}
      />
    );
  }

  renderItemCurso(item) {
    return (
      <View style={styles.alignLista}>
        <Icon name="circle" type="FontAwesome" style={styles.listaItems} />
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }
  exibeTexto() {
    const { description } = this.state;
    return <Text style={styles.text}>{description}</Text>;
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <ActivityIndicator />;
    } else {
      return (
        <ImageBackground
          style={styles.background}
          resizeMode="contain"
          source={this.state.background}
        >
          <ScrollView style={styles.ScrollV}>
            <View style={styles.unify}>
              <Image source={this.state.title} style={styles.image} />
              <View style={styles.subHeader}>
                <Image source={Clip} style={styles.clip} resizeMode="contain" />
                {this.exibeTexto()}
              </View>
              <View style={styles.subHeader2}>
                <Image source={cursos} style={styles.cursos} />
                {this.renderListCursos()}
              </View>
            </View>
            <View style={styles.footer} />
          </ScrollView>
        </ImageBackground>
      );
    }
  }
}
