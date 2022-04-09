import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { getPokemons } from '../api/pokemon';

export default function Pokedex() {
  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
