import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

 function PrimaryButton({children, onPress}) { 
  
  return (
    <View style={styles.btnContainer}>
      <Pressable 
        style={({ pressed }) => 
        pressed
        ? [styles.btnPressableContainer, styles.pressed]
        : styles.btnPressableContainer
        } 
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}
        >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
      </View>  
   
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },

  btnPressableContainer: {
    backgroundColor: Colors.primary700,
    borderRadius: 28,
    paddingVertical: 15,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2
    
  },
  
  btnText: {
    color: 'white',
    textAlign: 'center'    
  },

  pressed: {
    opacity: 0.
  }

});