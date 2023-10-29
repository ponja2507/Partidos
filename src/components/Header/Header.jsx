import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./Header.styles"
import { StatusBar } from 'expo-status-bar'

const Header = ({title}) => {
  return (
    <View style={styles.contenedorPrincipal}>
        {/* <StatusBar /> */}
        <View style={styles.subContenedores}>
            <Pressable style={styles.boton}>
                <Text style={styles.textBoton}>Inicio</Text>
            </Pressable>
        </View>
        <View style={styles.subContenedores}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.subContenedores}>
            <Text></Text>
        </View>
    </View>
  )
}

export default Header