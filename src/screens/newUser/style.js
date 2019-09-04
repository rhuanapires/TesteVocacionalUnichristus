import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  background: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: width,
    height: height
  },
  ScrollV: {
    flex: 1,
    padding: 20
  },
  subHeader: {
    borderRadius: 30,
    marginHorizontal: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    opacity: 0.7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    elevation: 10,
    ...Platform.select({
      android: {
        textShadowColor: "#00000040",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 20,
        elevation: 10
      }
    })
  },
  clip: {
    width: 40,
    height: 110,
    right: 25,
    position: "absolute",
    top: -48
  },
  textPicker: {
    fontSize: 14,
    textAlign: "left",
    color: "#19BEF2",
    borderRadius: 50,
    borderColor: "#19BEF2"
    // borderBottomWidth: 2
    // paddingBottom: 10,
    // paddingVertical: 5,
    // marginVertical: 10,
    // marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    color: "#19BEF2",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginHorizontal: 10,
    marginTop: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 3
    },
    ...Platform.select({
      android: {
        textShadowColor: "#00000040",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 20,
        elevation: 10
      }
    })
  },
  subtext: {
    marginHorizontal: 10,
    color: "#b6b6b6",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "justify"
  },
  image: {
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    height: 80
  },
  textInput: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#EAEAEA",
    color: "#19BEF2",
    borderRadius: 50,
    borderColor: "#19BEF2",
    borderBottomWidth: 2,
    //opacity: 0.9,
    paddingHorizontal: Platform.OS === "android" ? 20 : 10,
    paddingBottom: 10,
    paddingVertical: 5,
    marginVertical: 5,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 3
    },
    ...Platform.select({
      android: {
        textShadowColor: "#00000040",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 20
      }
    })
  },
  button: {
    flex: 1,
    flexDirection: "row",
    // alignSelf: "flex-end",
    backgroundColor: "#19BEF2",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  buttonEye: {
    flexDirection: "row",
    // alignSelf: "flex-end",
    backgroundColor: "#19BEF2",
    borderRadius: 180,
    marginHorizontal: 5,
    paddingHorizontal: 6,
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
    marginHorizontal: 3,
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
  textEye: {
    color: "#19BEF2",
    fontWeight: "bold",
    alignItems: "center",
    top: 10
  },
  alignButtons: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  viewFooter: {
    marginBottom: 30
  }
});

export default styles;
