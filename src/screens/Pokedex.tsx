import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import PokemonsList from '../components/PokemonsList';
import { getPokemonByUrl, getPokemons } from '../api/pokemon';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [nextUrl, setNextUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons(nextUrl);
      setNextUrl(response.next);
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
      <PokemonsList loadPokemons={loadPokemons} pokemons={pokemons} hasNext={!!nextUrl} />
    </SafeAreaView>
  );
}
