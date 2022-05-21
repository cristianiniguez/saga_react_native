import { FC, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getPokemonDetails } from '../api/pokemon';
import PokemonHeader from '../components/pokemon/PokemonHeader';
import PokemonType from '../components/pokemon/PokemonType';
import PokemonStats from '../components/pokemon/PokemonStats';
import PokemonFavorite from '../components/pokemon/PokemonFavorite';
import useAuth from '../hooks/useAuth';
import type { PokedexStackParamList } from '../navigation/PokedexNavigation';

type PokemonProps = NativeStackScreenProps<PokedexStackParamList, 'Pokemon'>;

const Pokemon: FC<PokemonProps> = ({ navigation, route: { params } }) => {
  const { user } = useAuth();
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => pokemon && user && <PokemonFavorite id={pokemon.id} />,
      headerLeft: () => (
        <Icon
          color='#fff'
          name='arrow-left'
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 20 }}
        />
      ),
    });
  }, [navigation, params, user, pokemon]);

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
      <PokemonStats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;
