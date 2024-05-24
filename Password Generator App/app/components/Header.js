import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>✨ رمزساز ویژه ✨</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#240046',
        marginTop:Constants.statusBarHeight,
    },
    headerTitle : {
        fontSize: 20,
        color: '#fff',
        paddingVertical: 15,
        textAlign: 'center',
    }
})