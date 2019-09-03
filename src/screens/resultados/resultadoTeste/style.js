import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    width: width,
    height: height,
    marginBottom: 50
  },
  ScrollV: {
    flex: 1,
    marginTop: 90
  },
  unify: {
    marginTop: 150,
    paddingHorizontal: 20
  },
  subHeader: {
    borderRadius: 30,
    marginHorizontal: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 30,
    backgroundColor: "#ffffff",
    opacity: 0.7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    elevation: 10
  },
  subHeader2: {
    marginTop: 30,
    borderRadius: 30,
    marginHorizontal: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#ffffff",
    opacity: 0.7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    elevation: 10
  },
  clip: {
    width: 40,
    height: 110,
    right: 25,
    position: "absolute",
    top: -48
  },
  alignItems: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: "#19BEF2",
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    elevation: 10
  },
  textSubtitles: {
    fontSize: 14,
    color: "#19BEF2",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 10,
    marginTop: 3,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    elevation: 10
  },
  subtext: {
    marginHorizontal: 10,
    color: "#b6b6b6",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "justify"
  },
  image: {
    marginTop: 10,
    height: 60,
    alignContent: "center",
    width: 340
  },
  cursos: {
    left: -5,
    height: 40,
    alignContent: "center",
    width: 110
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "#19BEF2",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingHorizontal: 8
  },
  buttonBack: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "#FFF",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10
  },
  textButtonBack: {
    color: "#1397BF",
    fontWeight: "bold",
    paddingHorizontal: 8
  },
  alignButtons: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 30
  },
  footer: {
    marginBottom: 30
  },
  listaItems: {
    color: "#19BEF2",
    fontSize: 6,
    alignSelf: "center",
    marginHorizontal: 10
  },
  alignLista: {
    flexDirection: "row"
  }
});

export default styles;
