import { FC } from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet } from 'react-native';

import PokemonCard from './PokemonCard';

type PokemonsListProps = {
  hasNext: boolean;
  loadPokemons: () => void | Promise<void>;
  pokemons: any[];
};

const PokemonsList: FC<PokemonsListProps> = ({ hasNext, loadPokemons, pokemons }) => {
  const loadMore = () => loadPokemons();

  return (
    <FlatList
      contentContainerStyle={styles.flatListContentContainer}
      data={pokemons}
      keyExtractor={(pokemon) => pokemon.id.toString()}
      ListFooterComponent={
        hasNext ? <ActivityIndicator color='#aeaeae' style={styles.spinner} /> : undefined
      }
      numColumns={2}
      onEndReached={hasNext ? loadMore : undefined}
      onEndReachedThreshold={0.1}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    marginTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});

export default PokemonsList;
