import {useState} from "react";
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [isGameOver, setIsGameOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setIsGameOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setIsGameOver(true);
        setGuessRounds(numberOfRounds);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (isGameOver && userNumber) {
        console.log(userNumber);
        screen = <GameOverScreen userNumber={userNumber}
                                 roundsNumber={guessRounds}
                                 onRestartGame={startNewGameHandler}
        />;
    }

    return (
        <>
            <StatusBar style='light'></StatusBar>
            <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
                <ImageBackground source={require('./assets/images/background.png')}
                                 resizeMode="cover"
                                 style={styles.rootScreen}
                                 imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>

    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },

});
