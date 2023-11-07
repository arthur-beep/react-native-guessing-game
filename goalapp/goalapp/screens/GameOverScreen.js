import { StyleSheet, Text, View, Image } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNumber, userNumber, onstartNewGame}){
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../assets/success.png')}
      />
      </View>
      <Text
        style={styles.summaryText}>
            Your phone needed <Text style={styles.highlightText}>{roundsNumber} </Text>
            rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onstartNewGame}>Start new game</PrimaryButton>
      
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },

    rootContainer: {
        flex: 1,
        fontSize: 24,
        marginTop: 100,
        alignItems: 'center',
    },

    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10 
    },

    highlightText: {
        color: 'white'
    },


})