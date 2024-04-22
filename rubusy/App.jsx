import React from 'react';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

//React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <Auth0Provider domain={"{dev-ugmyflf2idkyptub.us.auth0.com}"} clientId={"{eMjEgT5C3h83wf9tArSoI1k2ZROcDuUb}"}>
      <RootStack />
    </Auth0Provider>
  )
}