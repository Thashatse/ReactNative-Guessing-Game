import {
  Text,
  View,
  Image,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../Components/Ui/Title";
import Colours from "../constants/colours";
import PrimaryButton from "../Components/Ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = width < 380 ? 150 : height < 400 ? 80 : 300;
  console.log("imageSize: " + imageSize);
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  console.log("imageStyle.width: " + imageStyle.width);
  console.log("imageStyle.height: " + imageStyle.height);
  console.log("imageStyle.borderRadius: " + imageStyle.borderRadius);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainerStyle, imageStyle]}>
          <Image
            source={require("../assets/Images/success.png")}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainerStyle: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
    textAlign: "center",
    paddingBottom: 25,
  },

  highlightedText: {
    color: Colours.primary500,
    fontFamily: "poppins-bold",
  },
});
