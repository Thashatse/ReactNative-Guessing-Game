import { View, Text, Pressable, StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
    console.log(children + " has been pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colours.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colours.primary500,
    paddingVertical: 8,
    PaddingHorizontal: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 2,
  },

  buttonText: {
    fontFamily: 'poppins',
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
  },

  pressed: {
    opacity: 0.75,
  },
});
