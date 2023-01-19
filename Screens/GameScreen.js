import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../Components/Ui/Title";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/Ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    console.log("useEffect: ", currentGuess, userNumber, parseInt(currentGuess) === parseInt(userNumber))
    if(parseInt(currentGuess) === parseInt(userNumber)){
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    //direction => ''lower', ''greater'
    console.log(direction, currentGuess, userNumber);
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }

    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <Text>Log Rounds</Text>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
