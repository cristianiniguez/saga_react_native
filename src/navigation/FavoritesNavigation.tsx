import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorites from '../screens/Favorites';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Favorites} name='Favorites' options={{ title: 'Favoritos' }} />
      <Stack.Screen
        component={Pokemon}
        name='Pokemon'
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
