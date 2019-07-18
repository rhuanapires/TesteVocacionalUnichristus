import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    paddingTop: 40
  },
  profileInfo: {
    padding: 15,
    alignItems: "center"
  },
  profileButtons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonLogout: {
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: 30,
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonEdit: {
    flexDirection: "row",
    backgroundColor: "blue",
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    marginLeft: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    fontSize: 14,
    textAlignVertical: "center",
    marginLeft: 5
  },
  textProfile: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 5
  }
});

export default styles;
