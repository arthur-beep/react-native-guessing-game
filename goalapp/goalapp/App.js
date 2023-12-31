import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import Colors from './constants/colors';


export default function App() {
    const [userNumber, setUsernumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] =useState(0)

    function pickedNumberHandler(pickedNumber){
        setUsernumber(pickedNumber)
        setGameIsOver(false)
    }

    function gameOverHandler(numberOfRounds){
        setGameIsOver(true)
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler(){
        setUsernumber(null);
        setGuessRounds(0)
    }

    let screen =<StartGameScreen onPickNumber={pickedNumberHandler}/>

    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if(gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onstartNewGame={startNewGameHandler}/>
    }

     return (
    <LinearGradient colors={[ Colors.accent500, Colors.primary800]}
     style={styles.rootScreen}>
        <ImageBackground 
            source={require('./assets/dice2.jpg')}
            resizeMode='cover'
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            
        </ImageBackground>
        
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        
    },
    backgroundImage: {
        opacity: 0.17
    }

});
 