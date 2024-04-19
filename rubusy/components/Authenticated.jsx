import React from 'react';
import {View, Text, Button} from 'react-native';
import { loginWithAuth0 } from '../auth0';

const Authenticated = ({navigation}) => {
    const handleLogout = async () => {
        try {
            await logoutFromAuth0();
            navigation.replace('Welcome');
        }
        catch (error) {
            console.error('Error logging out: ', error)
        }
    };

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are authenticated!</Text>
            <Button 
                title = "Logout" 
                onPress = {handleLogout}
            />
        </View>
    );
};

export default Authenticated;