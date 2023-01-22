import { StyleSheet, Text } from "react-native";
import Colours from "../../constants/colours";

function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
      color: Colours.primary500,
      fontSize: 20,
    },
});