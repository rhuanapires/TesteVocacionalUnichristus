import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const style = StyleSheet.create({
  bg: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    padding: 5,
    borderRadius: 10
  },
  image: {
    width: width / 1.5,
    height: width / 2.8,
    alignSelf: "center",
    marginBottom: 60
  },
  divisors: {
    alignSelf: "center"
  },
  viewAlinhar: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    width: width * 0.7
  },
  input: {
    fontSize: 14,
    color: "#41b7dd",
    opacity: 1.0
  },
  buttonInput: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderColor: "#002e61",
    opacity: 0.9,
    borderRadius: 70,
    paddingHorizontal: 15,
    marginVertical: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 3
    },
    elevation: 10
  },
  buttonLogin: {
    borderRadius: 30,
    backgroundColor: "#ffffff",
    color: "#41b7dd",
    opacity: 0.9,
    padding: 12,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 3
    },
    elevation: 10
  },
  text: {
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    color: "#41b7dd",
    fontSize: 16,
    fontWeight: "bold"
  },
  textButtonSenha: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 30,
    marginRight: 10,
    fontSize: 12
  },
  textButtonNewAccount: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default style;
