import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { getPokemonFavorites } from '../api/favorite';
import { getPokemonDetails } from '../api/pokemon';
import PokemonsList from '../components/pokemon/PokemonsList';
import useAuth from '../hooks/useAuth';

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<any[]>([]);

  const loadFavorites = async () => {
    const response = await getPokemonFavorites();
    const pokemons = [];
    for await (const id of response) {
      const pokemonDetails = await getPokemonDetails(id);
      pokemons.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other['official-artwork'].front_default,
      });
    }
    setFavorites(pokemons);
  };

  useFocusEffect(
    useCallback(() => {
      user && loadFavorites();
    }, []),
  );

  if (!user) {
    return <Text>User not logged</Text>;
  }

  return (
    <SafeAreaView>
      <PokemonsList pokemons={favorites} />
    </SafeAreaView>
  );
}
