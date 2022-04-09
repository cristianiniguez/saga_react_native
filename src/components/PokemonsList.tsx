import { FC } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import PokemonCard from './PokemonCard';

type PokemonsListProps = {
  pokemons: any[];
};

const PokemonsList: FC<PokemonsListProps> = ({ pokemons }) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatListContentContainer}
      data={pokemons}
      keyExtractor={(pokemon) => pokemon.id.toString()}
      numColumns={2}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default PokemonsList;
