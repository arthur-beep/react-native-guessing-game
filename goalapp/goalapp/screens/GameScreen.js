import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title' 
import Colors from '../constants/colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/card';
import Instruction from '../components/ui/instructions';
import { Ionicons }  from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem'

function generateRandomBetween(min, max, exclude){
  const rndNum = Math.floor(Math.random() * (max-min)) + min;
    
  if(rndNum === exclude){
    return generateRandomBetween(min, max, exclude);
  }else{
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber )
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  function nextGuessHandler(direction){
    if((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
      ) {
        Alert.alert('Dont Lie!', "You know that this is wrong...",
      [{ text: 'Sorry', style: 'Cancel'},
    ]);
    return;
  }
    

    if(direction === 'lower'){
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
     
     const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
     setCurrentGuess(newRndNumber)
     setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title>Opponent's container</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction>Higher or Lower</Instruction>
       
        <View style={styles.btnContainer}>
          <View style={styles.btnInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white'/>
            </PrimaryButton>
          </View>

          <View style={styles.btnInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color='white'/>
            </PrimaryButton>
          </View>
          
        </View>
      </Card>
      <View>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => (
          <GuessLogItem 
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
            />
            )}
          keyExtractor={(item) => item }/>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },

    btnContainer: {
      flexDirection: 'row',
   },

   btnInnerContainer: {
     flex: 1
   }
   
})