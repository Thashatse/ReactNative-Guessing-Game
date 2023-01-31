import { Text, StyleSheet, Platform } from "react-native";
import Colours from "../../constants/colours";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontFamily: "poppins-bold",
    fontSize: 24,
    color: Colours.secondary500,
    textAlign: "center",
    padding: 12,
    borderWidth: 0 /*Platform.select({ios: 0, android: 2})*/ /*Platform.OS !== "ios" ? 2 : 0*/,
    borderColor: Colours.secondary500,
    maxWidth: "80%",
    width: 300,
  },
});
