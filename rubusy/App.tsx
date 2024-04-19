/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/



import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Authenticated from './components/Authenticated';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen name = "Welcome" component = {Welcome}/>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "SignUp" component = {Signup}/>
        <Stack.Screen name = "Authenticated" component = {Authenticated}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;