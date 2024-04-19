import React from 'react';
import {Button, View, Image} from 'react-native';
import {styles} from '../styles/styles';
import { loginWithAuth0 } from '../auth0';

const Welcome = ({navigation}) => {
    const handleLogin = async () => {
        try {
            await loginWithAuth0();
            navigation.replace('Authenticated')
        }
        catch (error) {
            console.error('Error logging in: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source = {require('../images/logo.jpg')}
                style = {styles.logo}
                resizeMode = "contain"
            />
            <Button
                title = "Sign Up"
                onPress = {() => navigation.navigate('SignUp')}
                style = {styles.button}
            />
        </View>
    );
};

export default Welcome;