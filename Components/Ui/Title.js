import { Text, StyleSheet } from 'react-native';
import Colours from '../../constants/colours';

function Title({children}){
    return <Text style={style.title}>{children}</Text>
}

export default Title

const style = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: Colours.secondary500,
        textAlign: "center",
        padding: 12,
        borderWidth: 2,
        borderColor: Colours.secondary500,
    },
})