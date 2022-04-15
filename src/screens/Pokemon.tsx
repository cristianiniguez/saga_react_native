import { FC, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getPokemonDetails } from '../api/pokemon';
import type { PokedexStackParamList } from '../navigation/PokedexNavigation';
import PokemonHeader from '../components/PokemonHeader';
import PokemonType from '../components/PokemonType';

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
    <ScrollView>
      <PokemonHeader
        image={pokemon.sprites.other['official-artwork'].front_default}
        name={pokemon.name}
        order={pokemon.order}
        type={pokemon.types[0].type.name}
      />
      <PokemonType types={pokemon.types} />
    </ScrollView>
  );
};

export default Pokemon;
