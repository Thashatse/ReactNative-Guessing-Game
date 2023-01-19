import { View, Text, StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function NumberContainer({children}) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 6,
        borderColor: Colours.secondary500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText:{
        color: Colours.secondary500,
        fontSize: 36,
        fontWeight: 'bold',
    },
})

export default NumberContainer;