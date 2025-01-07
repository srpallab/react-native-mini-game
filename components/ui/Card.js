import {View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (<View style={styles.container}>{children}</View>);
}

export default Card;

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 35,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})
