import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';


const auth0Domain = 'dev-ugmyflf2idkyptub.us.auth0.com';
const auth0ClientId = 'eMjEgT5C3h83wf9tArSoI1k2ZROcDuUb';
const redirectUri = AuthSession.makeRedirectUri({ queryParams: { useProxy: 'true' } });

export const loginWithAuth0 = async () => {
  const authUrl = `https://${auth0Domain}/authorize` +
    `?client_id=${auth0ClientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=token` +
    `&scope=openid profile email`;

  try {
    const response = await AuthSession.loadAsync(authUrl);
    if (response.type === 'success') {
      const accessToken = response.params.access_token;
      const idToken = response.params.id_token;
      console.log('Access token:', accessToken);
      console.log('ID token:', idToken);
      return { accessToken, idToken };
    } 
    else {
      console.log('Authentication failed:', response.type);
      return null;
    }
  } 
  catch (error) {
    console.error('Error during authentication:', error);
    return null;
  }
};

export const logoutFromAuth0 = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('idToken');
      console.log('Logged out successfully');
    } 
    catch (error) {
      console.error('Error logging out:', error);
    }
  };




/*
import * as AuthSession from 'expo-auth-session';
import * as Random from 'expo-random';

const auth0ClientId = 'eMjEgT5C3h83wf9tArSoI1k2ZROcDuUb';
const auth0Domain = 'dev-ugmyflf2idkyptub.us.auth0.com';
const redirectUri = AuthSession.makeRedirectUri({ queryParams: {useProxy: 'true' }});

export const loginWithAuth0 = async () => {
  const state = await Random.getRandomBytesAsync(32);
  const nonce = await Random.getRandomBytesAsync(32);
  const authUrl = `https://${auth0Domain}/authorize` +
    `?response_type=code` +
    `&client_id=${auth0ClientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${encodeURIComponent(state)}` +
    `&nonce=${encodeURIComponent(nonce)}` +
    `&scope=openid profile email`;

  const result = await AuthSession.startAsync({ authUrl });
  if (result.type === 'success') {
    // Handle successful authentication
    console.log(result.params.code);
  } else {
    // Handle other types of responses or errors
    console.error(result.type);
  }
};
*/