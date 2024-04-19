import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';


const auth0Domain = 'YOUR_AUTH0_DOMAIN';
const auth0ClientId = 'YOUR_AUTH0_CLIENT_ID';
const redirectUri = AuthSession.makeRedirectUri({ queryParams: { useProxy: 'true' } });

export const loginWithAuth0 = async () => {
  const authUrl = `https://${auth0Domain}/authorize` +
    `?client_id=${auth0ClientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=token` +
    `&scope=openid profile email`;

  try {
    const response = await AuthSession.startAsync({ authUrl });
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
  


