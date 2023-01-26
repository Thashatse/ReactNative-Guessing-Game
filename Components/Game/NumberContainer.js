import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colours from "../../constants/colours";

function NumberContainer({children}) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: deviceWidth < 380 ? 12 : 16,
        margin: deviceWidth < 380 ? 12 : 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText:{
        color: Colours.primary500,
        fontSize: deviceWidth < 380 ? 26 : 36,
        fontWeight: 'bold',
    },
})
