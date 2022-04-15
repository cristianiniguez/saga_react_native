import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

export type PokedexStackParamList = {
  Pokedex: undefined;
  Pokemon: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<PokedexStackParamList>();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Pokedex}
        name='Pokedex'
        options={{ headerTransparent: true, title: '' }}
      />
      <Stack.Screen
        component={Pokemon}
        name='Pokemon'
        options={{ headerTransparent: true, title: '' }}
      />
    </Stack.Navigator>
  );
}
