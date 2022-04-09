import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { getPokemonByUrl, getPokemons } from '../api/pokemon';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons();
      const newPokemons = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonByUrl(pokemon.url);
        newPokemons.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }
      setPokemons([...pokemons, ...newPokemons]);
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
