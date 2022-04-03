import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Account} name='Account' options={{ title: 'Mi cuenta' }} />
    </Stack.Navigator>
  );
}
