import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from "./src/screens"
import { Header } from './src/components/';

export default function App() {
  return (
    <View>
      <Header title={"titulo"} />
    </View> 
  );
}

