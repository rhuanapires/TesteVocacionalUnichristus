import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  background: {
    width: width,
    height: height,
    flex: 1
  }
});

export default styles;
