import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/card'
import Instruction from '../components/ui/instructions'

function StartGameScreen({onPickNumber} ) {
  const [enteredNumber, setEnteredNumber]= useState('');

  function inputHandler(enteredNumber){
    setEnteredNumber(enteredNumber)
  }

  function resetNumberHandler(){
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber) 

    if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
      Alert.alert(
        'Invalid number', 
        'Number has to be a number between 1 and 99',
        [{text: 'okay', style: 'destructive', onPress: resetNumberHandler}]
        
        )
      return;
    }
     onPickNumber(choseNumber);

  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
      <Instruction>Enter a number</Instruction>
        <TextInput 
          style={styles.numberInput}
          maxLength={2} 
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={inputHandler}
          />

         <View style={styles.btnContainer}>
          <View style={styles.btnInnerContainer}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnInnerContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View> 
         </View>    
         </Card>
    </View>
  )
}

export default StartGameScreen

const styles =StyleSheet.create({
  rootContainer:{
       flex: 1,
      fontSize: 24,
      marginTop: 100,
      alignItems: 'center',
     },

      numberInput: {
      height: 50,
      width: 50,
      marginTop: 50,
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    btnContainer: {
       flexDirection: 'row',
    },
    btnInnerContainer: {
      flex: 1
    },

})