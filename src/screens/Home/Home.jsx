import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../components'

const Home = () => {
  return (
    <View>
      <Header title={"Home"}/>
      <Text>Bienvenido a Partidos! </Text>
    </View>
  )
}

export default Home