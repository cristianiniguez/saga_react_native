import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Favorites} name='Favorites' options={{ title: 'Favoritos' }} />
    </Stack.Navigator>
  );
}
