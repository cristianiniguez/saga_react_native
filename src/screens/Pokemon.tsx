import { FC, useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getPokemonDetails } from '../api/pokemon';
import type { PokedexStackParamList } from '../navigation/PokedexNavigation';

type PokemonProps = NativeStackScreenProps<PokedexStackParamList, 'Pokemon'>;

const Pokemon: FC<PokemonProps> = ({ navigation, route: { params } }) => {
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    loadPokemon();
  }, [params]);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonDetails(params.id);
      setPokemon(response);
    } catch (error) {
      navigation.goBack();
    }
  };

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

export default Pokemon;
