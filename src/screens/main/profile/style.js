import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#FFF",
    borderWidth: 5
  },
  imageView: {
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3
    },
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLogout: {
    flexDirection: "row",
    backgroundColor: "#2D97C7",
    borderRadius: 30,
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    padding: 5,
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
  buttonEdit: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    marginLeft: 20,
    padding: 5,
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
  textButtonLogout: {
    textAlignVertical: "center",
    marginLeft: 5,
    color: "#ffffff"
  },
  textButton: {
    textAlignVertical: "center",
    marginLeft: 5,
    color: "#19bef2"
  },
  textProfile: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 5,
    paddingBottom: 15,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 10
  },
  shadowProfile: {
    opacity: 0.7
  },
  iconsEdit: {
    color: "#19bef2"
  },
  iconLogout: {
    color: "#ffffff"
  }
});

export default styles;
