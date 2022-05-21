import { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

type PokemonHeaderProps = {
  image: string;
  name: string;
  order: number;
  type: string;
};

const PokemonHeader: FC<PokemonHeaderProps> = ({ image, name, order, type }) => {
  const color = getColorByPokemonType(type);
  const contentStyle = { backgroundColor: color, ...styles.content };

  return (
    <View style={contentStyle}>
      <View style={styles.header}>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
      </View>
      <View style={styles.contentImg}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});

export default PokemonHeader;
