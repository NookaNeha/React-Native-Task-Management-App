import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FAB } from 'react-native-paper';
const floatingButton = () => {
    return (
        <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
    )
}

export default floatingButton

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })
  
