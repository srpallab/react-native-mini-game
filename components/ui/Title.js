import {Text, StyleSheet, Platform} from "react-native";

function Title({children}) {
    return (<Text style={styles.title}>{children}</Text>);
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans',
        fontSize: 24,
        width: 300,
        maxWidth: '80%',
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        padding: 12,
    },
})
