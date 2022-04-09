import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Pokedex}
        name='Pokedex'
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen component={Pokemon} name='Pokemon' />
    </Stack.Navigator>
  );
}
