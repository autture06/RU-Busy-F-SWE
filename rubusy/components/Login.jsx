import React from 'react';
import {Button, View} from 'react-native';
import {styles} from '../styles/styles';
import { loginWithAuth0 } from '../auth0';

const LoginScreen = ({navigation}) => {
    const handleLogin = async () => {
        try {
            await loginWithAuth0();
            navigation.replace('Authenticated');
        }

        catch (error) {
            console.error('Error logging in: ', error);
        }
    };

    return (
        <View style = {styles.container}>
            <Button
                title = "Login with Auth0"
                onPress = {handleLogin}
                style = {styles.button}
            />
            <Button
                title = "Go Back"
                onPress = {() => navigation.goBack}
                style = {styles.button}
            />
        </View>
    );
};

export default Login;