import React from 'react';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "Signup" component = {Signup}/>
                <Stack.Screen name = "Welcome" component = {Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;