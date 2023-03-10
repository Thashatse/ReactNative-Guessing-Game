import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import Colours from "../constants/colours";
import Title from "../Components/Ui/Title";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";

function StartGameScreen({ onConfirmNumber }) {
  const { width, height } = useWindowDimensions();

  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Please enter a valid number between 0 and 100",
        [{ text: "Okay", style: "cancel", onPress: resetInputHandler }]
      );
      return;
    }

    onConfirmNumber(enteredNumber);
  }

  console.log(height);
  const marginTopValue = height < 400 ? 25 : 50;

  return (
    <ScrollView style={styles.Screen}>
      <KeyboardAvoidingView style={styles.Screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopValue }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontFamily: "poppins-bold",
    fontSize: 32,
    borderBottomColor: Colours.primary500,
    borderBottomWidth: 2,
    color: Colours.primary500,
    marginVertical: 8,
    textAlign: "center",
    width: 75,
    marginBottom: 15,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
