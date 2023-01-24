import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../Components/Ui/Title";
import Colours from "../constants/colours";
import PrimaryButton from '../Components/Ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainerStyle}>
        <Image
          source={require("../assets/Images/success.png")}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds
        to guess the number <Text style={styles.highlightedText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainerStyle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colours.primary500,
    overflow: "hidden",
    margin: 36,
  },

  imageStyle: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "poppins",
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 25
  },

  highlightedText: {
    color: Colours.primary500,
    fontFamily: "poppins-bold",
  },
});
