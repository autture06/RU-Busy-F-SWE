import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

//React navigation stack
import RootStack from './navigators/RootStack';

const Home = () => {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

export default function App() {
  return (
    <Auth0Provider domain={"{dev-ugmyflf2idkyptub.us.auth0.com}"} clientId={"{eMjEgT5C3h83wf9tArSoI1k2ZROcDuUb}"}>
      <RootStack />
    </Auth0Provider>
  )
}
