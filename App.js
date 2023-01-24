import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colours from "./constants/colours";

import GameOverScreen from "./Screens/GameOverScreen";
import StartGameScreen from "./Screens/StartGameScren";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  
  function gameOverHandler(guessCount){
    setGuessRounds(guessCount);
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }
  return (
    <LinearGradient colors={[Colours.primary500, Colours.secondary700]} style={styles.rootScreen}>
      <StatusBar style="auto"></StatusBar>
      <ImageBackground
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.25,
  },
});
