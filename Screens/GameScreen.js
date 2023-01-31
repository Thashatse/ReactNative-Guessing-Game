import {
  View,
  Dimensions,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import Title from "../Components/Ui/Title";
import Card from "../Components/Ui/Card";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import InstructionText from "../Components/Ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../Components/Game/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log(
      "useEffect: ",
      currentGuess,
      userNumber,
      parseInt(currentGuess) === parseInt(userNumber)
    );
    if (parseInt(currentGuess) === parseInt(userNumber)) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessCount) => [currentGuess, ...prevGuessCount]);
    setCurrentGuess(newRandomNumber);
  }

  const guessRoundsListLength = guessRounds.length;

  const marginBottomValue = width > 380 ? 0 : 12;
  const marginTopValue = height < 400 ? 16 : 50;

  let content = (
    <>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>
        <InstructionText style={{ marginBottom: marginBottomValue }}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <Card>
          <View style={styles.wideContentContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View>
              <NumberContainer>{currentGuess}</NumberContainer>
              <InstructionText style={{ marginBottom: marginBottomValue }}>
                Higher or lower?
              </InstructionText>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  }

  return (
    <View style={[styles.screen, { marginTop: marginTopValue }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={[styles.listContainer, {paddingTop: 0}]}>
        {/* {guessRounds.map((guessRounds) => (
          <Text key={guessRounds}>{guessRounds}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  wideContentContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
});
