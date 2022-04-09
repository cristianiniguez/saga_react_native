import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../utils/getColorByPokemonType';

type PokemonCardProps = {
  pokemon: any;
};

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const goToPokemon = () => {
    console.log(pokemon);
  };
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const cardStyles = {
    backgroundColor: pokemonColor,
    ...styles.card,
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={cardStyles}>
        <Text>#{`${pokemon.order}`.padStart(3, '0')}</Text>
        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 5,
    borderRadius: 15,
    padding: 5,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
