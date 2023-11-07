import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'


function instruction({ children }) {
  return <Text style={styles.instructions}>{ children }</Text> 
}

export default instruction

const styles = StyleSheet.create({
    
    instructions: {
        color: Colors.accent500,
        fontSize: 24
      }
})