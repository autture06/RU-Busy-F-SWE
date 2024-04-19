import React from 'react';
import {Button, View} from 'react-native';
import {styles} from '../styles/styles';
import { loginWithAuth0 } from '../auth0';

const Signup = ({navigation}) => {
    const handleLogin = async () => {
        try {
            await loginWithAuth0();
            navigation.replace('Authenticated');
        }

        catch (error) {
            console.error('Error signing up: ', error);
        }
    };

    return (
        <View style = {styles.container}>
            <Button
                title = "Sign Up with Auth0"
                onPress = {handleLogin}
                style = {styles.button}
            />
            <Button
                title = "Go back"
                onPress = {() => navigation.goBack()}
                style = {styles.button}
            />
        </View>
    );
};

export default Signup;