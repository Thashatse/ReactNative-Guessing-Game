import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGameScreen from "./Screens/StartGameScren";

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <StartGameScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
