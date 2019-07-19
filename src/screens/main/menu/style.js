import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  viewTitulo: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 5
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  imageButton: {},
  button: {
    backgroundColor: "#19BEF2",
    height: 150,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3
    }
  }
});

export default styles;
