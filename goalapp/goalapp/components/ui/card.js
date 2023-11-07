import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

function card({ children }) {
  return <View style={styles.card}>{ children }</View>
}

export default card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 50,
        marginHorizontal: 18,
        borderRadius: 20,
        backgroundColor: Colors.primary800,  
        elevation: 4,
        shadowColor: 'black',
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

})